import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DummyAuthService } from './dummy-auth.service';
@Controller('dummy-auth')
export class DummyAuthController {
  constructor(private readonly dummyAuthService: DummyAuthService) {}

  @Post()
  create(@Body() createDummyAuthDto: any) {
    return this.dummyAuthService.create();
  }

  @Get()
  findAll() {
    return this.dummyAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dummyAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDummyAuthDto: any) {
    // return this.dummyAuthService.update(+id, updateDummyAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dummyAuthService.remove(+id);
  }
}
