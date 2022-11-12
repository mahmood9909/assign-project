import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Array<any>> {
    return await this.prisma.employee.findMany();
  }
}
