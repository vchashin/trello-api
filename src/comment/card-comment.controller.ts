import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('cards')
@Crud({
  model: {
    type: CommentEntity,
  },
  params: {
    cardId: {
      field: 'cardId',
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
      user: {},
    },
  },
})
@Controller('/cards/:cardId/comments')
export class CardCommentController implements CrudController<CommentEntity> {
  constructor(public service: CommentService) {}
}
