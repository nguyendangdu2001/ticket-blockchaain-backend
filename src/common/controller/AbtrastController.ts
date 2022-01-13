import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { User } from '../decorators';
import { AbstractService } from '../service/AbtrastService';
@Controller()
export class AbtrastController<
  T extends AbstractService<S>,
  S = T extends AbstractService<infer U> ? U : never,
> {
  protected service: T;
  constructor(service: T) {
    this.service = service;
  }
  @Post()
  create(@Body() createUserDto: S, @User() user: UserEntity) {
    return this.service.create(createUserDto, user);
  }
  @Get()
  findAll(
    @User() user: UserEntity,
    @Query() query: { page?: number; perPage?: number },
  ) {
    return this.service.findAll({}, query?.page, query?.perPage, user);
  }
  @Get('/:id')
  async findOne(@Param('id') id: string, @User() user: UserEntity) {
    return await this.service.findOneById(id, user);
  }
  @Delete('delete')
  removeMany(@Body() ids: string[], @User() user: UserEntity) {
    return ids;
    return this.service.removeMany(ids, user);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: S,
    @User() user: UserEntity,
  ) {
    return this.service.update(id, updateUserDto, user);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string, @User() user: UserEntity) {
  //   return this.service.remove(id, user);
  // }
}
