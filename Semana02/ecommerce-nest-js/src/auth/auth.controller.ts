import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login() {
    return this.authService.login()
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