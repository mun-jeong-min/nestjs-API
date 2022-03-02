import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entity/auth.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/middleware/jwt-strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Auth]),
PassportModule.register({defaultStrategy: 'jwt'}),
JwtModule.register({
  secret: process.env.JWT_ACCESSTOKEN_KEY,
  signOptions: { expiresIn: '1h' }
})
],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule {}
