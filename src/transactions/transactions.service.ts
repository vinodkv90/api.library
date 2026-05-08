import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private repo: Repository<Transaction>,
  ) {}

  async borrowBook(data: CreateTransactionDto) {
    const transaction = this.repo.create({
      ...data,
      borrowedAt: new Date(),
    });

    return await this.repo.save(transaction);
  }

  async findAll() {
    return await this.repo.find({
      relations: ['user', 'book'],
    });
  }

  async returnBook(id: number) {
    const transaction = await this.repo.findOne({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    transaction.returnedAt = new Date();

    return await this.repo.save(transaction);
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
