import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    password: string;

    constructor()
    {
        this.id = -1;
        this.name = "";
        this.password = "";
    }
}