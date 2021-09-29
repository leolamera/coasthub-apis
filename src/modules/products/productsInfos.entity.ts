import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductsInfos {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    product_id: string
    
    @Column()
    option: string

    @Column()
    available: boolean

}