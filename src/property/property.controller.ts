/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll(@Query('role') role?: 'intern' | 'admin') {
    return [];
  }

  @Get('onlyget')
  findAll2() {
    return 'all properties new';
  }

  @Get(':id/:action')
  findOne(@Param('id') id: string, @Param('action') action: string) {
    return `property ${id} with action ${action}`;
  }

  //   @Post()
  //   create() {
  //     return 'create property new';
  //   }

  @Post()
  @HttpCode(202)
  create2(@Body() body: any) {
    return [];
  }
}
