import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entity/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly MovieService:MoviesService) {}

    @Get()
    public async getAll():Promise<Movie[]>{
        return await this.MovieService.getAll();
    }

    @Get('search')
    getSearch(@Query('year') findSearch:string){
        return `return year: ${findSearch}`
    }

    @Get("/:id")
    getOne(
        @Param("id") movieId:string,
    ){
        return `this will return one movie with the id: ${movieId}`
    }

    @Post()
    createMovie(@Body() movieData){
        return movieData;
    }

    @Delete("/:id")
    remove(
        @Param("id") movieId:string,
    ){
        return `this remove one movie with the id: ${movieId}`
    }x  
    // patch는 일부분, put은 전체 업데이트
    @Patch("/:id")
    update(
        @Param("id") movieId:string,
        @Body() movieData
    ){
        return {
            movieData: movieId,
            ...movieData
        }
    }
}
