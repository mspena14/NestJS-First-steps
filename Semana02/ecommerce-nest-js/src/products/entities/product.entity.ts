
import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {length:150})
    name: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column('varchar', {length:255})
    description: string;

    @ManyToMany(() => Order, order => order.products)
    orders: Order[];
}
