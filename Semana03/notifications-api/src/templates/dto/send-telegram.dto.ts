import {
    IsEnum,
    IsNotEmpty,
    IsString,
    ValidateNested,
    IsObject,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { Template } from '../enums/template.enum';
  import { NewRequestParams, RegisterParams, LoginParams, NewMessageParams, NewPorpertyAvailableParams } from './params.dto';

  export class SendTelegramMessageDto {
    
    @IsString()
    @IsNotEmpty()
    sendTo: string;
  
    @IsEnum(Template)
    @IsNotEmpty()
    template: Template;
  
    @ValidateNested()
    @Type((object) => {
      switch (object?.object?.template) {
        case Template.NEW_REQUEST:
          return NewRequestParams;
        case Template.REGISTER:
          return RegisterParams;
        case Template.LOGIN:
          return LoginParams;
        case Template.NEW_MESSAGE:
          return NewMessageParams;
        case Template.PROPERTY_AVAILABLE:
          return NewPorpertyAvailableParams;
      }
    })
    @IsObject()
    params: any;
  }
  