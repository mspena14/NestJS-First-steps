import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('varchar', { length: 200})
    email: string;

    @Column('varchar', { length: 200})
    password: string;

    @Column('varchar', { length: 50})
    role: string;
    
    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}
