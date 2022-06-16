import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractService } from 'src/common/service/AbtrastService';
import { CreateTagInput } from './dto/create-tag.input';
import { Tag, TagDocument } from './entities/tag.entity';

@Injectable()
export class TagsService extends AbstractService<Tag> {
  constructor(
    @InjectModel(Tag.name) private readonly tagModel: Model<TagDocument>, // private readonly neo4jService: Neo4jService,
  ) {
    super(tagModel);
  }
  // async createTagNode(tagId: string) {
  //   const p = await this.neo4jService.write(
  //     `
  //     CREATE (p:Tag)
  //     SET p+=$props
  //     return p
  //   `,
  //     { props: { id: tagId } },
  //   );

  //   return p;
  // }
  async create(createTagInput: CreateTagInput) {
    const existTag = await this.tagModel.findOne({
      name: { $regex: `^${createTagInput.name}$` },
    });

    if (existTag) return existTag;
    const newTag = await this.tagModel.create(createTagInput);
    // await this.createTagNode(newTag.id.toString());
    return newTag;
  }

  async search(key: string, limit: number, offset: number) {
    const getTags = this.tagModel.find(
      {
        name: { $regex: key, $options: 'm' },
      },
      {},
      { limit, skip: offset },
    );
    const getCount = this.tagModel.countDocuments({
      name: { $regex: key, $options: 'siu' },
    });
    return await Promise.all([await getTags, await getCount]);
  }
}
