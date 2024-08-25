import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { User } from './users/entities/user.entity';
import { Order } from './orders/entities/order.entity';
import { Product } from './products/entities/product.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bvrma7trmoyjkqhah8dr-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u8zgvxzls1g6hnuy',
      password: 'RVufta9Hy3ik7Rzm6svV',
      database: 'bvrma7trmoyjkqhah8dr',
      entities: [__dirname + '/**/*.entity{.ts, .js}', User, Order, Product],
      synchronize: true,
    }),
    UsersModule, ProductsModule, OrdersModule, AuthModule, CommonModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
