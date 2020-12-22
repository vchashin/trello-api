import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CardEntity } from './card.entity';
import { CardService } from './card.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('cards')
@Crud({ model: { type: CardEntity } })
@Controller('cards')
export class CardController implements CrudController<CardEntity> {
  constructor(public service: CardService) {}
}
