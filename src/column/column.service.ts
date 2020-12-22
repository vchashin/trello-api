import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ColumnEntity } from './column.entity';

@Injectable()
export class ColumnService extends TypeOrmCrudService<ColumnEntity> {
  constructor(@InjectRepository(ColumnEntity) repo) {
    super(repo);
  }
}
