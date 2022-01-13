import { Document, FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
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
  protected async canSeeOne(id: string, user?: User) {
    return true;
  }
  async create(input: T, user?: User) {
    // plainToClass(input, T);
    console.log(input);
    console.log(this.model);
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
    query: FilterQuery<S> = {},
    page = 1,
    perPage = 20,
    user?: User,
  ) {
    if (!this.canSee(query, user)) return;
    const getCount = this.model.countDocuments(query);
    const getDocuments = this.find(
      user,
      query,
      {},
      { limit: perPage, skip: (page - 1) * perPage },
    );
    const [documents, count] = await Promise.all([
      await getDocuments,
      await getCount,
    ]);
    return {
      data: documents,
      count: count,
      totalPages: Math.round(count / perPage),
    };
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

  async findOne(query: FilterQuery<S>, user?: User) {
    if (!this.canSee(query, user)) return;
    return await this.model.findOne(query);
  }

  findOneById(id: string, user?: User) {
    if (!this.canSeeOne(id, user)) return;
    return this.model.findById(id);
  }

  async update(id: string, updateUserInput: UpdateQuery<S>, user?: User) {
    if (await this.canUpdate(id, user)) {
      return this.model.findByIdAndUpdate(id, updateUserInput, { new: true });
    }
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
  async removeMany(ids: string[], user?: User) {
    const idsObj = ids?.map((e) => new Types.ObjectId(e));
    // if (await this.canDelete(id, user)) {
    return this.model.deleteMany({ _id: { $in: idsObj } });
    // }
  }
  async removeByProjectId(idProject: string) {
    return this.model.deleteMany({
      projectId: new Types.ObjectId(idProject),
    });
  }
}
