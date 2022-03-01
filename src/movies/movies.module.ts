import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entity/movies.entity';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports:[TypeOrmModule.forFeature([Movie])],
    providers:[MoviesService],
    controllers:[MoviesController]
})
export class MoviesModule {}
