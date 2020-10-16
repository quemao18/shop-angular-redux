import { Entity, Column, BaseEntity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customers } from "./Customers";
import { Products } from "./Products";

@Entity()
export class Orders extends BaseEntity {

    @PrimaryGeneratedColumn()
    order_id: number;

    @Column()
    price: number;

    @Column()
    qty: number;

    @Column()
    id: string;

    @ManyToOne(type => Customers, customer => customer.customerToOrder)
    @JoinColumn({ name: 'customer_id' })
    customer: Customers;

    @ManyToOne(type => Products, product => product.orderProduct)
    @JoinColumn({name: 'product_id'})
    product: Products;

}
