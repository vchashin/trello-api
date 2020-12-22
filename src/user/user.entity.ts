import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CrudValidationGroups } from '@nestjsx/crud';

import { BaseEntity } from '../base-entity';
import { CardEntity } from '../card/card.entity';
import { ColumnEntity } from '../column/column.entity';
import { CommentEntity } from '../comment/comment.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

export class Name {
  @IsString({ always: true })
  @Column({ nullable: true })
  first: string;

  @IsString({ always: true })
  @Column({ nullable: true })
  last: string;
}

@Entity('users')
export class UserEntity extends BaseEntity {
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  @IsEmail({ require_tld: false }, { always: true })
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ nullable: true })
  password: string;

  @IsOptional({ groups: [UPDATE, CREATE] })
  @IsBoolean({ always: true })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Type((t) => Name)
  @Column((type) => Name)
  name: Name;

  /**
   * Relations
   */

  @OneToMany((type) => ColumnEntity, (ul) => ul.user)
  @Type((t) => ColumnEntity)
  @JoinColumn()
  columns?: ColumnEntity[];

  @OneToMany((type) => CardEntity, (ul) => ul.user)
  @Type((t) => CardEntity)
  @JoinColumn()
  cards?: CardEntity[];

  @OneToMany((type) => CommentEntity, (ul) => ul.user)
  @Type((t) => CommentEntity)
  @JoinColumn()
  comments?: CommentEntity[];
}
