import { Module } from '@nestjs/common';
import { UsersMService } from './users-m.service';
import { UsersMController } from './users-m.controller';

@Module({
  controllers: [UsersMController],
  providers: [UsersMService]
})
export class UsersMModule {}
