import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private usersService: UserService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    req['user'] = await this.usersService.findOne(1);

    return true;
  }
}
