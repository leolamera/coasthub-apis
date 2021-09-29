import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../../users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from '../strategies/local.strategy';
import { HashService } from '../hash.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from '../strategies/jwt.strategy';


@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            privateKey: 'YFF2vDojyaOwqGpnE4ct7tthqvA/SvVitQXLKRlKxlg=',
            signOptions: { expiresIn: '600s' }
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        HashService,
        JwtStrategy
    ],
    controllers: [AuthController]
})
export class AuthModule {}
