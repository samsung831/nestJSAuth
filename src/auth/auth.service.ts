import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService
    ){

    }

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne(username);

        if (user && user.password === password) {
            const {password, username, ...rest} = user;
            return rest;
        }

        return null;
    }

    async loggin(user: any) {
        const payload = { name: user.name, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
