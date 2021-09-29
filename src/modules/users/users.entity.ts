import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    email: string
    
    @Column()
    password: string

    @Column()
    bussines: boolean

    @Column({type: 'bigint'})
    timestamp: string

}