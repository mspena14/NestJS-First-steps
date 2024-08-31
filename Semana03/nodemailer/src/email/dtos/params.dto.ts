// new-request.dto.ts
import { IsNotEmpty } from 'class-validator';

export class NewRequestParams {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    propertyName: string;

    @IsNotEmpty()
    requestDate: string;

    @IsNotEmpty()
    applicantName: string;

    @IsNotEmpty()
    applicantEmail: string;

    @IsNotEmpty()
    applicantMessage: string;
}


export class RegisterParams {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    userEmail: string;

    @IsNotEmpty()
    registrationDate: string;

    @IsNotEmpty()
    companyName: string;
}

// Otros DTOs para otras plantillas...
