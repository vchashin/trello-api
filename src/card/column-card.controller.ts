import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CardEntity } from './card.entity';

@ApiTags('columns')
@Crud({
  model: {
    type: CardEntity,
  },
  params: {
    columnId: {
      field: 'columnId',
      type: 'number',
    },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    join: {
      users: {},
    },
  },
})
@Controller('/columns/:columnId/cards')
export class ColumnCardController implements CrudController<CardEntity> {
  constructor(public service: CardService) {}
}
