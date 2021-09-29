import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    product_name: string
    
    @Column()
    description: string

    @Column()
    price: string

    @Column()
    tag: string

    @Column({ nullable: true })
    url_img: string

    @Column()
    user_id: string

    @Column()
    available: boolean

    @Column({type: 'bigint'})
    timestamp: string

}