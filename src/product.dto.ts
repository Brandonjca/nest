import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class ProductDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;
}
