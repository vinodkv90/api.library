import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { Book } from '../../books/entities/book.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  bookId: number;

  @Column({ type: 'date' })
  borrowedAt: Date;

  @Column({ type: 'date', nullable: true })
  returnedAt: Date;

  // Relation with user
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  // Relation with book
  @ManyToOne(() => Book)
  @JoinColumn({ name: 'bookId' })
  book: Book;
}
