import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'YFF2vDojyaOwqGpnE4ct7tthqvA/SvVitQXLKRlKxlg='
        })
    }

    async validate(payload: any): Promise<any> {
        return { id: payload.sub }
    }
}