import { Injectable } from '@nestjs/common';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';

@Injectable()
export class MicrocreditsService {
  create(createMicrocreditDto: CreateMicrocreditDto) {
    return 'This action adds a new microcredit';
  }

  findAll() {
    return `This action returns all microcredits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} microcredit`;
  }

  update(id: number, updateMicrocreditDto: UpdateMicrocreditDto) {
    return `This action updates a #${id} microcredit`;
  }

  remove(id: number) {
    return `This action removes a #${id} microcredit`;
  }
}
