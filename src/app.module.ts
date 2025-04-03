import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PropertyModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
