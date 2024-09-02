import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NewRequestParams, RegisterParams, LoginParams, NewMessageParams, NewPorpertyAvailableParams } from '../../templates/dto/params.dto';

import { Template } from '../../templates/enums/template.enum';

@Injectable()
export class ParamsValidationPipe implements PipeTransform {
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
      case Template.LOGIN:
        paramsDto = LoginParams;
        break;
      case Template.NEW_MESSAGE:
        paramsDto = NewMessageParams;
        break;
      case Template.PROPERTY_AVAILABLE:
        paramsDto = NewPorpertyAvailableParams;
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
