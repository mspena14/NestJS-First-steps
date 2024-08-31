import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(
    @Body()
    loginAuthDto: LoginAuthDto
  ) {
    return this.authService.login(loginAuthDto)
  }

  @Post('register')
  register(
    @Body()
    registerAuthDto: RegisterAuthDto
  ) {
    console.log(registerAuthDto);
    return this.authService.register(registerAuthDto);
  }
}