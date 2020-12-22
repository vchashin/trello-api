import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { UserEntity } from '../user/user.entity';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Type } from 'class-transformer';
import { CommentEntity } from '../comment/comment.entity';
import { ColumnEntity } from '../column/column.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class CardEntity extends BaseEntity {
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  description: string;

  /**
   * Relations
   */

  @OneToMany((type) => CommentEntity, (ul) => ul.card)
  @Type((t) => CommentEntity)
  @JoinColumn()
  comments?: CommentEntity[];

  @ManyToOne((type) => ColumnEntity, (el) => el.cards)
  public column: ColumnEntity;

  @ManyToOne((type) => UserEntity, (el) => el.cards)
  public user: UserEntity;
}
