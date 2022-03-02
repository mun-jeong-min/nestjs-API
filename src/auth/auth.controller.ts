import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { signupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {}

    @Post('/signup')
    async signup(@Body() body:signupDto): Promise<void> {
        await this.authService.signup(body);
    }

    @Post('/login')
    async login(@Body() body:loginDto) {
        return await this.authService.login(body);
    }
}
