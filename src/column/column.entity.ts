import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { UserEntity } from '../user/user.entity';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { CardEntity } from '../card/card.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class ColumnEntity extends BaseEntity {
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  /**
   * Relations
   */

  @OneToMany((type) => CardEntity, (ul) => ul.column)
  @Type((t) => CardEntity)
  @JoinColumn()
  cards?: CardEntity[];

  @ManyToOne((type) => UserEntity, (el) => el.columns)
  public user: UserEntity;
}
