import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Movie } from './entity/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly MovieService:MoviesService) {}

    @UseGuards(AuthGuard())
    @Post()
    public async createMovie(@Body() movieData) {
        await this.MovieService.createMovie(movieData);
    }

    @UseGuards(AuthGuard())
    @Get()
    public async getAll(): Promise<Movie[]> {
        return await this.MovieService.getAll();
    }
    
    @UseGuards(AuthGuard())
    @Get("/:id")
    public async getOne(
        @Param("id") movieId:number,
    ){
        return await this.MovieService.getOne(movieId);
    }

    @Get('/year')
    public async getYear(@Query('year') year:number)
    {
        return `${year}`;
    }

    @Delete("/:id")
    remove(
        @Param("id") movieId:string,
    ){
        return `this remove one movie with the id: ${movieId}`
    }
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
