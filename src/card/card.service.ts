import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CardEntity } from './card.entity';

@Injectable()
export class CardService extends TypeOrmCrudService<CardEntity> {
  constructor(@InjectRepository(CardEntity) repo) {
    super(repo);
  }
}
