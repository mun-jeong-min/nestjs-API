import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import * as dotenv from 'dotenv'
import { Movie } from './movies/entity/movies.entity';
dotenv.config();

@Module({
  imports: [MoviesModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Movie],
      synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}