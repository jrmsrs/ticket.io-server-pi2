import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { TPsService } from './tps.service';
import { TP } from './entities/tp.entity';
import { Message } from './entities/message.entity';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateTPDto } from './dto/tp.dto';

@ApiTags('TPs')
@Controller()
export class TPsController {
  constructor(private readonly appService: TPsService) {}

  @Get('/issue')
  @ApiResponse({ status: 200, isArray: true, type: TP })
  async getUsers() {
    return this.appService.findAll();
  }

  @Post('/issue')
  @ApiResponse({ status: 200, type: Message })
  postUser(@Body() user: CreateTPDto) {
    return this.appService.create(user);
  }

  @Get('/issue/:id')
  @ApiResponse({ status: 200, type: TP })
  async getUserById(@Param('id') id: string) {
    return this.appService.findOneById(id);
  }

  @Put('/issue/:id')
  @ApiResponse({ status: 200, type: Message })
  async updateUser(@Param('id') id: string, @Body() user: CreateTPDto) {
    return this.appService.update(id, user);
  }

  @Delete('/issue/:id')
  @ApiResponse({ status: 200, type: Message })
  async deleteUser(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
