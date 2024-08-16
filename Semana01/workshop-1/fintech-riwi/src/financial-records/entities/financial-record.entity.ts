import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('financial-records')
export class FinancialRecord {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    amount:number;

    @Column()
    date: string;

    @Column()
    description: string;
}
