import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLeaveRequestDto, leaveSelection } from '../dto/leaves';
import { v4 as uuidv4 } from 'uuid';
import { Status } from '@prisma/client';
import { AlreadyProcessedException } from 'src/filters/custom-exception/already-processed.exception';
import { ProcessReqDto } from 'src/dto/process-req.dto';

@Injectable()
export class LeavesService {
  constructor(
    private readonly meailSrv: MailService,
    private readonly prisma: PrismaService,
  ) {}

  async findAll(eamil: string): Promise<any[]> {
    return await this.prisma.leavesRequests.findMany({
      select: leaveSelection,
      where: {
        Employee: {
          Manager: {
            email: eamil,
          },
        },
      },
    });
  }

  async addNewLeave(leaveRequest: CreateLeaveRequestDto, email: string) {
    const employee = await this.prisma.employee.findFirst({
      select: {
        id: true,
      },
      where: {
        email: email,
      },
    });

    /**
     * * futute work : employee 1 : leaveRequest M then validate upon te endsOn and stat date
     */

    if (!employee)
      throw new NotFoundException(`no coressponding email "${email}"`);
    const req = await this.prisma.leavesRequests.findFirst({
      where: {
        employeeId: employee.id,
        AND: {
          status: Status.PENDING,
        },
      },
    });

    if (req)
      throw new AlreadyProcessedException({
        message: `request number ${req.leaveId} is pending`,
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      });
    /**
     * !exception will be handled by filters.
     */
    return await this.prisma.leavesRequests.create({
      data: {
        startOn: leaveRequest.startOn,
        endsOn: leaveRequest.endsOn,
        status: Status.PENDING,
        employeeId: employee.id,
        leaveId: uuidv4(),
      },
    });
  }

  async processLeaeRequest(reqDetail: ProcessReqDto) {
    const req = await this.prisma.leavesRequests.findUnique({
      where: {
        leaveId: reqDetail.leaveId,
      },
    });

    if (!req)
      throw new NotFoundException(
        `request with id ${reqDetail.leaveId} is not found`,
      );

      
    const result = await this.prisma.leavesRequests.update({
    
      where : {
        leaveId : reqDetail.leaveId
      },
      data : {
        status : reqDetail.status
      }
    });

    return {
      message: `request with id ${req.leaveId} is ${reqDetail.status} successfully.`,
      objct : result
    };
  }

}
