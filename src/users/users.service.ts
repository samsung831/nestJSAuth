import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "admin",
            username: "admin",
            password: "admin"
        },
        {
            id: 2,
            name: "nikolaj",
            username: "niko",
            password: "niko"
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(u => u.username === username);
    }
}
