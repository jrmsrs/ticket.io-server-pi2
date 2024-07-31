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
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Message } from './entities/message.entity';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/user.dto';

@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get('/user')
  @ApiQuery({ name: 'email', required: false, type: String })
  @ApiResponse({ status: 200, isArray: true, type: User })
  async getUsers(@Query('email') email?: string) {
    if (email) return this.appService.findOneByEmail(email);

    return this.appService.findAll();
  }

  @Post('/user')
  @ApiResponse({ status: 200, type: Message })
  postUser(@Body() user: CreateUserDTO) {
    return this.appService.create(user);
  }

  @Get('/user/:id')
  @ApiResponse({ status: 200, type: User })
  async getUserById(@Param('id') id: string) {
    return this.appService.findOneById(id);
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
