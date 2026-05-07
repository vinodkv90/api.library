import { IsString, IsInt } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  isbn: string;

  @IsInt()
  publishedYear: number;

  @IsInt()
  quantity: number;
}
