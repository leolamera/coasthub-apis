import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'email'
        })
    }

    async validate(email: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(email, password)

        if (!user) {
            throw new UnauthorizedException("e-mail ou senha inválida")
        }

        return user
    }
}