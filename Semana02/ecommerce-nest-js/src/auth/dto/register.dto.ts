import { LoginAuthDto } from './login.dto';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterAuthDto extends LoginAuthDto {
    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    role: string;
}
