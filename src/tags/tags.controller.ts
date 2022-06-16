import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Post()
  create(@Body() createTicketTypeDto: CreateTagInput) {
    return this.tagService.create(createTicketTypeDto);
  }

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagService.findOne({ _id: new Types.ObjectId(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketTypeDto: UpdateTagInput) {
    return this.tagService.update(id, updateTicketTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagService.remove(id);
  }
}
