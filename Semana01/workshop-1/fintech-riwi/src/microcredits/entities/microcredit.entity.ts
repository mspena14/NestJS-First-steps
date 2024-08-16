import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('microcredits')
export class Microcredit {
@PrimaryGeneratedColumn()
id: string;

@Column()
userId: string;

@Column({type: "integer"})
amount: number;

@Column({type: "integer"})
interesRate: number;

@Column()
status: string;

@ManyToOne(() => User, (user: User) => user.microcredits)
user: User;
}
