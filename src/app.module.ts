import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AppService } from './app.service';
import { GroupsController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';
import { TPsController } from './tps/tps.controller';
import { TPsService } from './tps/tps.service';
import { SolutionsController } from './solutions/solutions.controller';
import { SolutionsService } from './solutions/solutions.service';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    GroupsController,
    TPsController,
    SolutionsController,
    ReportsController,
  ],
  providers: [
    AppService,
    UsersService,
    GroupsService,
    TPsService,
    SolutionsService,
    ReportsService,
  ],
})
export class AppModule {}
