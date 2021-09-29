import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../../users.service';
import { HashService } from '../hash.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly hashService: HashService,
        private readonly jwtService: JwtService, 
        ) {}

    async login(user): Promise<any>{
        const payload = { sub: user.id }

        return {
            token: this.jwtService.sign(payload)
        }
    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findUserByEmail(email)

        if(!user) {
            return null
        }

        const isPasswordValid = await this.hashService.compareHash(user.password, password)

        if (!isPasswordValid) {
            return null
        }
        
        return user
    }
}