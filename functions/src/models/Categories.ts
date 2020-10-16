import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Products } from "./Products";


@Entity()
export class Categories extends BaseEntity {

    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    name: string;

    @OneToMany(type => Products, productToCategory => productToCategory.category)
    productToCategory: Products[];

}