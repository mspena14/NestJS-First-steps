import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // handleRequest(err: any, user: any, info: any) {
  //   if (err || !user) {
  //     throw err || new UnauthorizedException('Invalid credentials or token');
  //   }
  //   return user;
  // }
}
