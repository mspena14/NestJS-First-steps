import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register.dto';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) { }
  async register(user: RegisterAuthDto) {
    // const userFound = await this.userService.findByEmail(user.email);
    const hashedPassword: string = await this.hashPassword(user.password);

    return await this.userService.create({ ...user, password: hashedPassword });
  }

  async login(user: LoginAuthDto) {
    const userFound = await this.userService.findByEmail(user.email);
    console.log(user.password, userFound.password);
    
    if (!(await bcrypt.compare(user.password, userFound.password))) throw new UnauthorizedException('Bad credentials');
    
    return this.generateToken(userFound);
  }

  private async hashPassword(password: string): Promise<string> {
    const salt: string = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  private generateToken(user: User): { accessToken: string } {
    const payload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    return {accessToken: token}
  }
}