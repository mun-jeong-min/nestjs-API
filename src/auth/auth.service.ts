import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { signupDto } from './dto/signup.dto';
import { Auth } from './entity/auth.entity';
import { hash, compare } from 'bcrypt'
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth) private AuthRepository:Repository<Auth>,
        private readonly jwtService:JwtService
    ) {}

    public async signup({ id,username,password }: signupDto)
    {
        const hashedPassword = await hash(password, 12);

        await this.AuthRepository.save({
            id: id,
            password: hashedPassword,
            username: username
        })
    }

    public async login({ id,password }: loginDto) {
        const user:Auth = await this.AuthRepository.findOne({id: id})

        if(!user){
            throw new NotFoundException();
        }

        if(!(await compare(password, user.password))) {
            throw new BadRequestException();
        }
        
        const payload = {
            id:user.id,
            username:user.username
        }

        const access_token = await this.jwtService.sign(payload);

        return {
            access_token,
        }
    }
}
