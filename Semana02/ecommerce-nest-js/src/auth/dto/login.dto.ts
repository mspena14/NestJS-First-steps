import { Transform } from "class-transformer";
import { IsEmail,MaxLength, MinLength} from "class-validator";

export class LoginAuthDto {
    @IsEmail()
    email:string;

    @Transform(({value}) => value.trim())
    @MinLength(6)
    @MaxLength(20)
    password:string;
}
