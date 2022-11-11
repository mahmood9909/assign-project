import { Module } from '@nestjs/common';
import { DummyAuthService } from './dummy-auth.service';
import { DummyAuthController } from './dummy-auth.controller';

@Module({
  controllers: [DummyAuthController],
  providers: [DummyAuthService]
})
export class DummyAuthModule {}
