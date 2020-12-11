import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @Get('/:username')
  getUser(@Req() req: Request): string {
    return `User name => ${req.params.username}`;
  }
}
