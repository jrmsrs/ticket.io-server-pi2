import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
