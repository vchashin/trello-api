import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentEntity } from './comment.entity';
import { CardCommentController } from './card-comment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  providers: [CommentService],
  exports: [CommentService],
  controllers: [CommentController, CardCommentController],
})
export class CommentModule {}
