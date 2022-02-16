import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "this will return all movies"
    }

    @Get("/:id")
    getOne(
        @Param("id") movieId:string,
    ){
        return `this will return one movie with the id = ${movieId}`
    }

    @Post()
    createMovie(){
        return "this will create movies"
    }

    @Delete("/:id")
    remove(
        @Param("id") movieId:string,
    ){
        return `this remove one movie with the id = ${movieId}`
    }
    // patch는 일부분, put은 전체 업데이트
    @Patch("/:id")
    update(
        @Param("id") movieId:string,
    ){
        return `this update one movie with the id = ${movieId}`
    }
}
