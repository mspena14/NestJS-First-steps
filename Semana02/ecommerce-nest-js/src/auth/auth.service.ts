import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) { }
  async register(registerAuthDto: RegisterAuthDto) {
    return await this.userService.create(registerAuthDto);
  }

  login() {
    return 'login';
  }
}