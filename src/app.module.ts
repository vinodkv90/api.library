import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';
import { TransactionsModule } from './transactions/transactions.module';

TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postegres',
  password: 'root',
  database: 'library_mangement_system',
  autoLoadEntities: true,
  synchronize: true, // disable in production
});

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BooksModule, UsersModule, AuthorsModule, TransactionsModule],
})
export class AppModule {}
