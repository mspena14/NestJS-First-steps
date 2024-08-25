import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) { }
  async register({email, password, role}: RegisterAuthDto) {
    const userFoud = await this.userService.findByEmail(email)
    
    return await this.userService.create({email, password, role});
  }

  login() {
    return 'login';
  }
}