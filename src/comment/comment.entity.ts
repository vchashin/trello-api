import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { UserEntity } from '../user/user.entity';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CardEntity } from '../card/card.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class CommentEntity extends BaseEntity {
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(500, { always: true })
  @Column({ type: 'text', nullable: true, default: null })
  text: string;

  /**
   * Relations
   */

  @ManyToOne((type) => UserEntity, (el) => el.comments)
  public user: UserEntity;

  @ManyToOne((type) => CardEntity, (el) => el.comments)
  public card: CardEntity;
}
