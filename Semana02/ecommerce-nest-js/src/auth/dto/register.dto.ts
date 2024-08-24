import { PartialType } from '@nestjs/mapped-types';
import { LoginAuthDto } from './login.dto';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    role: string;
}
