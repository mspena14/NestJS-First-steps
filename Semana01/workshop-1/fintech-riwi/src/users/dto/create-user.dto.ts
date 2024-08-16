import { FinancialRecord } from "src/financial-records/entities/financial-record.entity";


export class CreateUserDto {
    name: string;
    creditScore: number;
    financialHistory: FinancialRecord[];
}
