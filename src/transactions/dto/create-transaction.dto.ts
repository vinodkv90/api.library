import { IsInt } from 'class-validator';

export class CreateTransactionDto {
  @IsInt()
  userId: number;

  @IsInt()
  bookId: number;
}
