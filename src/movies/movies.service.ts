import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { setDto } from './dto/set.dto';
import { Movie } from './entity/movies.entity';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie) private movieRepository: Repository<Movie>,
    ) {}

    public async createMovie(
        { title, year, genres }: setDto
    ): Promise<void>{
        await this.movieRepository.save({
            title: title,
            year: year,
            genres: genres
        })
    }

    public async getAll(): Promise<Movie[]> {
        return await this.movieRepository.find();
    }

    public async getOne(id:number): Promise<Movie> {
        return await this.movieRepository.findOne(id);
    }
}