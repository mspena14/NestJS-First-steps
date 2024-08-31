import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelegramsService } from './telegrams.service';
import { CreateTelegramDto } from './dto/create-telegram.dto';
import { UpdateTelegramDto } from './dto/update-telegram.dto';

@Controller('telegrams')
export class TelegramsController {
  constructor(private readonly telegramsService: TelegramsService) {}

  @Post()
  create(@Body() createTelegramDto: CreateTelegramDto) {
    return this.telegramsService.create(createTelegramDto);
  }

  @Get()
  findAll() {
    return this.telegramsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telegramsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelegramDto: UpdateTelegramDto) {
    return this.telegramsService.update(+id, updateTelegramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telegramsService.remove(+id);
  }
}
