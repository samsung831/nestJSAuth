import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGurad } from './auth/local-auth.guard';
import { AuthenticatedGurad } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGurad)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  @UseGuards(AuthenticatedGurad)
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
