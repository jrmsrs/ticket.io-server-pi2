import { Module } from '@nestjs/common';
import { SolutionsController } from './solutions.controller';
import { SolutionsService } from './solutions.service';

@Module({
  imports: [],
  controllers: [SolutionsController],
  providers: [SolutionsService],
})
export class SolutionsModule {}
