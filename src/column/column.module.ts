import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnEntity } from './column.entity';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ColumnEntity])],
  providers: [ColumnService],
  exports: [ColumnService],
  controllers: [ColumnController],
})
export class ColumnModule {}
