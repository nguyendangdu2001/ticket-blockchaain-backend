import { User } from '../decorators';
import { AbstractService } from '../service/AbtrastService';
import { AbtrastController } from './AbtrastController';

// export class UserBaseController<
//   T extends AbstractService<S>,
//   S = T extends AbstractService<infer U> ? U : never,
// > extends AbtrastController<T, S> {
//   create(@Body() createUserDto: S, @User() user) {
//     return this.service.create(createUserDto);
//   }
// }
