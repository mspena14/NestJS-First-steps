import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialRecordsService } from './financial-records.service';
import { CreateFinancialRecordDto } from './dto/create-financial-record.dto';
import { UpdateFinancialRecordDto } from './dto/update-financial-record.dto';

@Controller('financial-records')
export class FinancialRecordsController {
  constructor(private readonly financialRecordsService: FinancialRecordsService) {}

  @Post()
  create(@Body() createFinancialRecordDto: CreateFinancialRecordDto) {
    return this.financialRecordsService.create(createFinancialRecordDto);
  }

  @Get()
  findAll() {
    return this.financialRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialRecordDto: UpdateFinancialRecordDto) {
    return this.financialRecordsService.update(+id, updateFinancialRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialRecordsService.remove(+id);
  }
}
