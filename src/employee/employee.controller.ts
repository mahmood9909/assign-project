import { Controller,Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly prisma: PrismaService) {}

}
