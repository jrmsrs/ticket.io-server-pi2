import { Module } from '@nestjs/common';
import { TPsController } from './tps.controller';
import { TPsService } from './tps.service';

@Module({
  imports: [],
  controllers: [TPsController],
  providers: [TPsService],
})
export class TPsModule {}
