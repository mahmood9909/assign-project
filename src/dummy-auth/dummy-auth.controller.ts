import { Controller,  Post, Body, UseFilters } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { HttpExceptionFilter } from 'src/filters/auth-exception.filter';
import { DummyAuthService } from './dummy-auth.service';
@Controller('dummy-auth')
export class DummyAuthController {
  constructor(private readonly dummyAuthService: DummyAuthService) {}

  @Post('login')
  @UseFilters(new HttpExceptionFilter())
  login(@Body() credentials: LoginDto) {
    return this.dummyAuthService.login(credentials.email);
  }
}
