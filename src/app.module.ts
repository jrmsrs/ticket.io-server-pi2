import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AppService } from './app.service';
import { GroupsController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, GroupsController],
  providers: [AppService, UsersService, GroupsService],
})
export class AppModule {}
