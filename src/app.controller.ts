import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGurad } from './auth/local-auth.guard';
import { AuthenticatedGurad } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.gurad';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGurad)
  @Post('login')
  login(@Request() req): any {
    return this.authService.loggin(req.user);
  }

  //Session logic
  //@UseGuards(AuthenticatedGurad)
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
