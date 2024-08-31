import { IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsArray()
  productIds: number[];

}
