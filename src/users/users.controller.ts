import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Message } from './entities/message.entity';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/user.dto';

@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get('/user')
  @ApiResponse({ status: 200, isArray: true, type: User })
  async getUsers() {
    return this.appService.findAll(); // handle in user.service
  }

  @Post('/user')
  @ApiResponse({ status: 200, type: Message })
  postUser(@Body() user: CreateUserDTO) {
    return this.appService.create(user);
  }

  @Get('/user/:id')
  @ApiResponse({ status: 200, type: User })
  async getUser(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Put('/user/:id')
  @ApiResponse({ status: 200, type: Message })
  async updateUser(@Param('id') id: string, @Body() user: CreateUserDTO) {
    return this.appService.update(id, user);
  }

  @Delete('/user/:id')
  @ApiResponse({ status: 200, type: Message })
  async deleteUser(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
