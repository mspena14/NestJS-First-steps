// new-request.dto.ts
import { IsEmail, IsNotEmpty } from 'class-validator';

export class NewRequestParams {
    @IsNotEmpty()
    ownerName: string;

    @IsNotEmpty()
    propertyName: string;

    @IsNotEmpty()
    requestDate: string;

    @IsNotEmpty()
    applicantName: string;

    @IsEmail()
    applicantEmail: string;

    @IsNotEmpty()
    applicantMessage: string;

    @IsNotEmpty()
    companyName: string;
}

export class RegisterParams {
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    registrationDate: string;

    @IsNotEmpty()
    companyName: string;
}

export class LoginParams {
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    loginDate: string;

    @IsNotEmpty()
    companyName: string;
}

export class NewMessageParams {
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    senderName: string;

    @IsNotEmpty()
    messageContent: string;

    @IsNotEmpty()
    companyName: string;
}

export class NewPorpertyAvailableParams {

    @IsNotEmpty()
    propertyName: string;

    @IsNotEmpty()
    propertyDescription: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    companyName: string;
}