import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { parse } from 'path';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update.user.dto';

@Controller('users')
export class UsersController {
  // const userService = new UsersService();
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: 'moderator' | 'admin' | 'user') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(
    @Body(ValidationPipe)
    user: createUserDto,
  ) {
    return this.userService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: updateUserDto,
  ) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
