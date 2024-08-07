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
import { SolutionsService } from './solutions.service';
import { Solution } from './entities/solution.entity';
import { Message } from './entities/message.entity';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateSolutionDto } from './dto/solution.dto';

@ApiTags('Solutions')
@Controller()
export class SolutionsController {
  constructor(private readonly appService: SolutionsService) {}

  @Get('/solution')
  @ApiResponse({ status: 200, isArray: true, type: Solution })
  async getUsers() {
    return this.appService.findAll();
  }

  @Post('/solution')
  @ApiResponse({ status: 200, type: Message })
  postUser(@Body() user: CreateSolutionDto) {
    return this.appService.create(user);
  }

  @Get('/solution/:id')
  @ApiResponse({ status: 200, type: Solution })
  async getUserById(@Param('id') id: string) {
    return this.appService.findOneById(id);
  }

  @Patch('/solution/:id')
  @ApiResponse({ status: 200, type: Message })
  async updateUser(@Param('id') id: string, @Body() user: CreateSolutionDto) {
    return this.appService.update(id, user);
  }

  @Delete('/solution/:id')
  @ApiResponse({ status: 200, type: Message })
  async deleteUser(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
