import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique:true})
    email: string;

    @Column('varchar', { length: 200})
    password: string;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date;

    @Column('varchar', { length: 50})
    role: string;
    
    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}
