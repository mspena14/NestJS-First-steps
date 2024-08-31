import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NewRequestParams, RegisterParams } from '../dtos/params.dto';

import { Template } from '../enums/template.enum';

@Injectable()
export class TemplateValidationPipe implements PipeTransform {
  async transform(value: any) {
    if (!value.template || !value.params) {
      throw new BadRequestException('Template and Params are required');
    }

    let paramsDto;
    switch (value.template) {
      case Template.NEW_REQUEST:
        paramsDto = NewRequestParams;
        break;
      case Template.REGISTER:
        paramsDto = RegisterParams;
        break;
      // Agrega más casos según las plantillas que tengas
      default:
        throw new BadRequestException('Invalid template type');
    }

    const object = plainToInstance(paramsDto, value.params);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    return value;
  }
}
