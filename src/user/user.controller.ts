import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common'; // Put, Delete
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Message } from './entities/message.entity';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/user.dto';

@ApiTags('Users')
@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('/users')
  @ApiResponse({ status: 200, isArray: true, type: User })
  async getUsers(): Promise<User[]> {
    return this.appService.findAll(); // handle in user.service
  }

  // add user
  @Post('/users')
  @ApiResponse({ status: 200, type: Message })
  postUser(@Body() user: CreateUserDTO): Message {
    return this.appService.postUser(user);
  }

  // get user by id
  @Get('/users/:id')
  @ApiResponse({ status: 200, type: User })
  getUser(@Param('id') id: string) {
    return this.appService.getUser(id);
  }

  // update user by id
  @Put('/users/:id')
  @ApiResponse({ status: 200, type: Message })
  updateUser(@Param('id') id: string, @Body() user: CreateUserDTO): Message {
    return this.appService.updateUser(id, user);
  }

  // delete user by id
  @Delete('/users/:id')
  @ApiResponse({ status: 200, type: Message })
  deleteUser(@Param('id') id: string): Message {
    return this.appService.deleteUser(id);
  }
}
