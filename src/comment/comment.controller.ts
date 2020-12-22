import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('comments')
@Crud({ model: { type: CommentEntity } })
@Controller('comments')
export class CommentController implements CrudController<CommentEntity> {
  constructor(public service: CommentService) {}
}
