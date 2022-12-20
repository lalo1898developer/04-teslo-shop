import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        length: 200,
        unique: true,
    })
    title: string;

    @Column('float', {
        default: 0
    })
    price: number;

    @Column({
        type: 'varchar',
        length: 200,
        nullable: true
    })
    description: string;

    @Column('varchar', {
        length: 200,
        unique: true,
    })
    slug: string;

    @Column('int', {
        default: 0
    })
    stock: number;

    @Column('varchar',{
        array: true
    })
    sizes: string[];

    @Column('varchar', {
        length: 200
    })
    gender: string;
}
