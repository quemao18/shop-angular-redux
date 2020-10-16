import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Orders } from "./Orders";

@Entity()
export class Customers extends BaseEntity {

    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column()
    name: string;

    @Column()
    id: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @OneToMany(type => Orders, customerToOrder => customerToOrder.customer)
    customerToOrder: Orders[];
}