import { Document, FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
type Doc<T> = T & Document<T>;
export abstract class KeysetPaginate<T, S = Doc<T>> {
  protected model: Model<S>;
  constructor(model: Model<S>) {
    this.model = model;
  }
  generatePaginationQuery(
    query: FilterQuery<Doc<T>>,
    sort: any[],
    direction: { before?: number; after?: number },
    nextKey: { [key: string]: any; _id: Types.ObjectId },
  ) {
    const { after, before } = direction;
    if (after && before) throw new Error('Cant have both after and before');
    const limit = after || before || 20;
    const sortField = sort == null ? null : sort[0];

    function nextKeyFn(items: Document<T>[]) {
      if (items.length === 0) {
        return null;
      }

      const item = items[items.length - 1];

      if (sortField == null) {
        return { _id: item._id };
      }

      return { _id: item._id, [sortField]: item[sortField] };
    }

    if (nextKey == null) {
      return { query, nextKeyFn };
    }

    let paginatedQuery = query;

    if (sort == null) {
      paginatedQuery._id = { $gt: nextKey._id as any };
      return { paginatedQuery, nextKey };
    }

    const sortOperator = sort[1] === 1 ? '$gt' : '$lt';

    const paginationQuery = [
      { [sortField]: { [sortOperator]: nextKey[sortField] } },
      {
        $and: [
          { [sortField]: nextKey[sortField] },
          { _id: { [sortOperator]: nextKey._id } },
        ],
      },
    ] as any;

    if (paginatedQuery.$or == null) {
      paginatedQuery.$or = paginationQuery;
    } else {
      paginatedQuery = { $and: [query, { $or: paginationQuery }] } as any;
    }

    return { paginatedQuery, nextKeyFn };
  }
}
