import { Controller, Get, Post, HttpStatus, Body } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { Headers } from '@nestjs/common';
import { AuthException } from 'src/filters/custom-exception/auth.excpetion';
import { CreateLeaveRequestDto } from 'src/dto/leaves';
@Controller('leaves')
export class LeavesController {

    constructor(private readonly leaveSrv : LeavesService){}

    @Get()
    findAll(@Headers() headers : any) : Promise<any[]> {
      if(!headers.email)
        throw new AuthException({message : `eamil header is missing .` , statusCode : HttpStatus.BAD_REQUEST})

      return this.leaveSrv.findAll(headers.email);
    }

    @Post()
    async addRequest( @Headers() headers :any, @Body() leave : CreateLeaveRequestDto) : Promise<any>{      
      if(!headers.email)
        throw new AuthException({message : `eamil header is missing .` , statusCode : HttpStatus.BAD_REQUEST})

      return await this.leaveSrv.addNewLeave(leave, headers.email)
    }
}
