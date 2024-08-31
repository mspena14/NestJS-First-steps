import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    totalPrice: number;

    @Column('int')
    userId: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;
    
    @ManyToMany(() => Product, product => product.orders, {eager:true})
    @JoinTable({
        name: 'order_products',
        joinColumn: { name: 'orderId' },
        inverseJoinColumn: { name: 'productId' }
    })
    products: Product[];
}
