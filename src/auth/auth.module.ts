import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  //Session logic
  //imports: [UsersModule, PassportModule.register({ session: true })],
  //providers: [AuthService, LocalStategy, SessionSerializer]
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET', //put in env variable
    signOptions: { expiresIn: '60s'}
  })],
  providers: [AuthService, LocalStategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
