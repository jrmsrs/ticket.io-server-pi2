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
import { GroupsService } from './groups.service';
import { Group } from './entities/group.entity';
import { Message } from './entities/message.entity';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateGroupDTO } from './dto/group.dto';

@ApiTags('Groups')
@Controller()
export class GroupsController {
  constructor(private readonly appService: GroupsService) {}

  @Get('/group')
  @ApiResponse({ status: 200, isArray: true, type: Group })
  async getGroups() {
    return this.appService.findAll();
  }

  @Post('/group')
  @ApiResponse({ status: 200, type: Message })
  postGroup(@Body() group: CreateGroupDTO) {
    return this.appService.create(group);
  }

  @Get('/group/:id')
  @ApiQuery({ name: 'issues', required: false, type: String })
  @ApiQuery({ name: 'members', required: false, type: String })
  @ApiResponse({ status: 200, type: Group })
  async getGroupById(
    @Param('id') id: string,
    @Query('issues') issues: string,
    @Query('members') members: string,
  ) {
    if (issues) return this.appService.findIssues(id);
    if (members) return this.appService.findMembers(id);

    return this.appService.findOneById(id);
  }

  @Put('/group/:id')
  @ApiResponse({ status: 200, type: Message })
  async updateGroup(@Param('id') id: string, @Body() group: CreateGroupDTO) {
    return this.appService.update(id, group);
  }

  @Delete('/group/:id')
  @ApiResponse({ status: 200, type: Message })
  async deleteGroup(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
