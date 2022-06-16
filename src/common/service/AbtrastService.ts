import {
  Document,
  FilterQuery,
  Model,
  PopulateOptions,
  QueryOptions,
  Types,
  UpdateQuery,
  UpdateWithAggregationPipeline,
} from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { ID } from '../types/ID';
export abstract class AbstractService<T, S = T & Document> {
  protected model: Model<S>;
  constructor(model: Model<S>) {
    this.model = model;
  }
  protected async canCreate(input: T, user?: User) {
    return true;
  }
  protected async canUpdate(id: string, user?: User) {
    return true;
  }
  protected async canDelete(id: string, user?: User) {
    return true;
  }
  protected async canSee(query: FilterQuery<S>, user?: User) {
    return true;
  }
  protected async canSeeOne(id: ID, user?: User) {
    return true;
  }
  async create(input: T, user?: User) {
    if (await this.canCreate(input, user)) {
      const newDocument = await this.model.create(input);
      // this.createNewUserNode(newUser.id);
      return newDocument;
    }
  }
  protected find(user?: User, ...all: Parameters<Model<S>['find']>) {
    return this.model.find(...all);
  }

  async findAll(
    query: FilterQuery<T> = {},
    page = 1,
    perPage = 20,
    user?: User,
    populates?: PopulateOptions | Array<PopulateOptions> | any,
  ) {
    if (!(await this.canSee(query, user))) return;
    const getCount = this.model.countDocuments(query);
    const getDocuments = this.find(
      user,
      query,
      {},
      { limit: perPage, skip: (page - 1) * perPage },
    );
    if (populates) {
      getDocuments.populate(populates);
    }
    const [documents, count] = await Promise.all([
      await getDocuments,
      await getCount,
    ]);
    return {
      data: documents,
      count: count,
      totalPages: Math.ceil(count / perPage),
    };
  }
  async findAllWithoutPagination(query: FilterQuery<T> = {}, user?: User) {
    if (!(await this.canSee(query, user))) return;
    const getDocuments = this.find(user, query);
    return getDocuments;
  }

  // async findAllKeysetPaginate(keyset: string) {
  //   const getCount = this.model.countDocuments();
  //   const getDocuments = this.model.find(
  //     {},
  //     {},
  //     { limit: perPage, skip: (page - 1) * perPage },
  //   );
  //   const [documents, count] = await Promise.all([
  //     await getDocuments,
  //     await getCount,
  //   ]);
  //   return {
  //     data: documents,
  //     count: count,
  //     totalPages: Math.round(count / perPage),
  //   };
  // }

  async findOne(query: FilterQuery<T>, user?: User) {
    if (!(await this.canSee(query, user))) return;
    return this.model.findOne(query);
  }

  async findOneById(id: ID, user?: User) {
    if (!(await this.canSeeOne(id, user))) return;
    return this.model.findById(id);
  }

  async update(id: string, updateInput: UpdateQuery<T>, user?: User) {
    if (await this.canUpdate(id, user)) {
      return this.model.findByIdAndUpdate(id, updateInput, { new: true });
    }
  }
  updateMany(...args: Parameters<Model<S>['updateMany']>) {
    return this.model.updateMany(...args);
  }
  updateOne(...args: Parameters<Model<S>['updateOne']>) {
    return this.model.updateOne(...args);
  }
  //   const ids = [id1, id2, id3...];
  // const query = { _id: { $in: ids} };
  // dbo.collection("users").deleteMany(query, (err, obj) => {
  //     if (err) throw err;
  // });
  async remove(id: string, user?: User) {
    if (await this.canDelete(id, user)) {
      return this.model.findByIdAndDelete(id);
    }
  }
  async removeOne(filter: FilterQuery<S>, user?: User) {
    if (await this.canDelete(filter as any, user)) {
      return this.model.findOneAndDelete(filter);
    }
  }
  async removeMany(ids: string[], user?: User) {
    const idsObj = ids?.map((e) => new Types.ObjectId(e));
    // if (await this.canDelete(id, user)) {
    return this.model.deleteMany({ _id: { $in: idsObj } });
    // }
  }
  async removeByProjectId(idProject: string): Promise<any> {
    return this.model.deleteMany({
      projectId: new Types.ObjectId(idProject),
    });
  }
}
