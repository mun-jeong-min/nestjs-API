import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Movie } from './entity/movies.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports:[TypeOrmModule.forFeature([Movie]),
AuthModule],
    providers:[MoviesService],
    controllers:[MoviesController]
})
export class MoviesModule {}
