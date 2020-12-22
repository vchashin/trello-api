import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Crud({
  model: { type: UserEntity },
  query: {
    join: {
      cards: {},
      columns: {},
      comments: {},
    },
  },
})
@Controller('users')
export class UserController implements CrudController<UserEntity> {
  constructor(public service: UserService) {}
}
