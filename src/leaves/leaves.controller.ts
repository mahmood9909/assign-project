import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { Headers } from '@nestjs/common';
import { AuthException } from 'src/filters/custom-exception/auth.excpetion';
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
    async addRequest() : Promise<any>{

    }
}
