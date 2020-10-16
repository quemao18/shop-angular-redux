import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Categories } from "./Categories";
import { Orders } from "./Orders";

@Entity()
export class Products extends BaseEntity {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    category_id: number;

    @Column()
    price: number;

    @ManyToOne(type => Categories, category => category.productToCategory)
    @JoinColumn({ name: 'category_id' })
    category: Categories;

    @OneToMany(type => Orders, orderProduct => orderProduct.product)
    orderProduct: Orders[];

}
