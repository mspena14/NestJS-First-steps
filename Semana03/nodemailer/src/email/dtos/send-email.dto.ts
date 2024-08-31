import {
    IsEnum,
    IsNotEmpty,
    IsString,
    ValidateNested,
    IsObject,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { Template } from '../enums/template.enum';
  import { NewRequestParams, RegisterParams } from './params.dto';
import { BadRequestException } from '@nestjs/common';

  
  export class SendEmailDto {
    @IsString()
    @IsNotEmpty()
    subjectEmail: string;
    
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
      }
    })
    @IsObject()
    params: any;
  }
  