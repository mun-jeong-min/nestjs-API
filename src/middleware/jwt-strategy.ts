import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy} from 'passport-jwt';
import { Auth } from "src/auth/entity/auth.entity";
import { Repository } from "typeorm";
import * as dotenv from 'dotenv';
import { UnauthorizedException } from "@nestjs/common";
dotenv.config();

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
constructor(
    @InjectRepository(Auth) private authRepository: Repository<Auth>
) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpriation: false,
        secretOrKey: process.env.JWT_ACCESSTOKEN_KEY
    });
}
async validate(payload) {
    const {id, username} = payload;
    const user = await this.authRepository.findOne({id,username});

    if(!user) {
        throw new UnauthorizedException();
    }
    return user;
}
}