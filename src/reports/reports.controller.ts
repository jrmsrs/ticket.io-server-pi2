import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity';
import { Message } from './entities/message.entity';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateReportDto } from './dto/report.dto';

@ApiTags('Reports')
@Controller()
export class ReportsController {
  constructor(private readonly appService: ReportsService) {}

  @Get('/report')
  @ApiResponse({ status: 200, isArray: true, type: Report })
  async getReport() {
    return this.appService.findAll();
  }

  @Post('/report')
  @ApiResponse({ status: 200, type: Message })
  postReport() {
    return this.appService.create();
  }
}
