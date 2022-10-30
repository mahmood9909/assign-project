import { Controller, Get } from '@nestjs/common';
import { LeavesService } from './leaves.service';

@Controller('leaves')
export class LeavesController {

    constructor(private readonly leaveSrv : LeavesService){}

    @Get()
    findAll(): string {
      this.leaveSrv.sendEmial();
      return "test";
    }
}
