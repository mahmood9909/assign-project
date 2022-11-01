import { Controller, Get } from '@nestjs/common';
import { LeavesService } from './leaves.service';

@Controller('leaves')
export class LeavesController {

    constructor(private readonly leaveSrv : LeavesService){}

    /**
     * * retrive all leave req.
     */
    @Get()
    findAll() : Promise<any[]> {
      return this.leaveSrv.findAll();
    }
}
