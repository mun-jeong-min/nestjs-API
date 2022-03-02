import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    uid:string

    @Column()
    id:string;

    @Column()
    password:string;

    @Column()
    username:string;
}