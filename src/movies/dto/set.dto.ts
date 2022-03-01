import { isNotEmpty, isNumber, isString } from "class-validator";

export class setDto {
    @isString()
    @isNotEmpty()
    title:string;

    @isNumber()
    @isNotEmpty()
    year:number;
}