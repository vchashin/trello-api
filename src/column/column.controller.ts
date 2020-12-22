import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ColumnEntity } from './column.entity';
import { ColumnService } from './column.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('columns')
@Crud({ model: { type: ColumnEntity } })
@Controller('columns')
export class ColumnController implements CrudController<ColumnEntity> {
  constructor(public service: ColumnService) {}
}
