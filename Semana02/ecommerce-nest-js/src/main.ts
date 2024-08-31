import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpErrorFilter } from './common/filters/http-exception.filter';
import { JwtMiddleware } from './common/middlewares/jwt.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  // app.use(JwtMiddleware);
  app.useGlobalFilters(new HttpErrorFilter()),
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
