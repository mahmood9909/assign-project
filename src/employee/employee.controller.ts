import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly empSrv: EmployeeService) {}

  @Get()
  findAll() {
    return this.empSrv.findAll();
  }
}
