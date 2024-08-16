import { FinancialRecord } from "src/financial-records/entities/financial-record.entity";
import { Microcredit } from "src/microcredits/entities/microcredit.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    creditScore: number;

    @Column('json', { nullable: true })
    financialHistory: FinancialRecord[];

    @OneToMany(() => Microcredit, (microcredit: Microcredit) => microcredit.user)
    microcredits: Microcredit[];
}
