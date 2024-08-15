import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Rlwl2023.',
      database: 'nest_test',
      autoLoadEntities: true,
      entities: [User],
      synchronize: true
    }),
    UsersModule]
})
export class AppModule {}
