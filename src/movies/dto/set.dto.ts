import { IsNotEmpty, isNotEmpty, IsNumber, isNumber, IsString, isString } from "class-validator";

export class setDto {
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsNumber()
    @IsNotEmpty()
    year:number;

    @IsString()
    @IsNotEmpty()
    genres:string;
}