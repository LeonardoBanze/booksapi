import { Module } from '@nestjs/common';
import { BookModule } from './module/book/book.module';

@Module({
  imports: [BookModule],
})
export class AppModule {}
