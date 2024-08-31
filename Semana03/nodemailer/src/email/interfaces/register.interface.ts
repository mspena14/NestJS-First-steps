import { IsNotEmpty } from "class-validator";

export class Register {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    userEmail: string;

    @IsNotEmpty()
    registrationDate: string;
    
    @IsNotEmpty()
    companyName: string;
}