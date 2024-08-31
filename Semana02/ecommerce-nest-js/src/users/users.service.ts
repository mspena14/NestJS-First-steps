import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({where: { email }});
  }
  async findAll() {
    return await this.userRepository.find();
  }

  async findById(id: UUID) {
    return await this.userRepository.findOne({where: { id }});
  }

  async update(id: UUID, user: UpdateUserDto) {
    const userFound = await this.userRepository.findOne({where: {id}})
    await this.userRepository.update(id, user);
    
    let hashedPassword: string;

    if(user.password) {
      hashedPassword = await this.hashPassword(user.password);
    }

    userFound.email = user.email;
    userFound.password = hashedPassword;

    return this.userRepository.save(userFound)
  }

  async remove(id: UUID) {
    return await this.userRepository.delete(id);
  }


  private async hashPassword(password: string): Promise<string> {
    const salt: string = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
