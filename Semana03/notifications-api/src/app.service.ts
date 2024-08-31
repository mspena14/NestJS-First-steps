
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Object {

    return {
      NODE_ENV: process.env.NODE_ENV,
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_DATABASE: process.env.DB_DATABASE,
    }
    // return 'Hello World!';
  }
}