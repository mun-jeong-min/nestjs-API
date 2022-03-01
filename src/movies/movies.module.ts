import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports:[],
    providers:[MoviesService],
    controllers:[MoviesController]
})
export class MoviesModule {}
