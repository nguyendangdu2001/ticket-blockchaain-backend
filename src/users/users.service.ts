import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Profile } from 'passport-facebook-token';
import { GoogleProfile } from 'src/auth/interface/GoogleProfile.interface';
import { ChangeStatusInput } from './dto/change-status.input';
// import { Neo4jService } from 'src/neo4j/neo4j.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';
import { QUERY_VIEW_USER } from 'src/common/query-select/user';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>, // private readonly neo4jService: Neo4jService,
    private readonly jwtService: JwtService,
  ) {
    // console.log(neo4jService);
  }

  async findOrCreateGuest(uuid: string, projectId: string, info: any) {
    let guest = await this.userModel.findOne({ uuid: uuid });
    if (!guest) {
      guest = await this.userModel.create({ uuid: uuid, guest: true, ...info });
    }
    const token = this.jwtService.sign({ userId: guest?._id, projectId });
    return { ...guest?.toObject(), token };
  }
  async findByEmail(email: string) {
    return await this.userModel.findOne({ email: email }, QUERY_VIEW_USER);
  }
  async create(createUserInput: CreateUserInput) {
    const newUser = await this.userModel.create(createUserInput);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // this.createNewUserNode(newUser.id);
    return newUser;
  }

  async findAll() {
    const getCount = this.userModel.countDocuments();
    const getUser = this.userModel.find({});
    return await Promise.all([await getUser, await getCount]);
  }

  async findOne(query: FilterQuery<UserDocument>) {
    return await this.userModel.findOne(query);
  }

  allUsers() {
    return this.userModel.aggregate([
      {
        $match: {
          guest: false,
        },
      },
    ]);
  }

  async findOneById(id: string) {
    const user = await this.userModel.findOne({ _id: id }).exec();
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userModel.findOne({ email: email }).exec();
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    console.log(updateUserInput);
    // return this.userModel.findByIdAndUpdate(id, updateUserInput, {
    //   projection: { password: -1 },
    // });
    console.log(id);

    const existingUser = await this.userModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateUserInput },
        {
          new: true,
        },
      )
      .exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return existingUser;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
  async findOrCreateGoogleUser(googleId: string, googleProfile: GoogleProfile) {
    console.log('go here 2');
    try {
      const user = await this.userModel
        .findOne({ 'google.id': googleId })
        .exec();
      if (user) {
        return user;
      } else {
        const newUser = await this.userModel.create({
          // userName: 'google' + googleProfile.payload.email,
          fullName: googleProfile.payload.name,
          avatar: googleProfile.payload.picture,
          google: {
            id: googleId,
            name: googleProfile.payload.name,
            email: googleProfile.payload.email,
          },
        });
        // this.createNewUserNode(newUser.id);

        return newUser;
      }
    } catch (error) {
      console.log(error);

      throw new UnauthorizedException();
    }
  }
  async findOrCreateFacebookUser(facebookProfile: Profile) {
    try {
      const user = await this.findOne({
        'facebookInfo.id': facebookProfile.id,
      });
      if (user) {
        return user;
      } else {
        const newUser = await this.userModel.create({
          // userName: 'facebook' + facebookProfile.emails[0].value,
          fullName: facebookProfile.displayName,
          avatar: facebookProfile.photos[0].value,
          facebookInfo: {
            id: facebookProfile.id,
            name: facebookProfile.displayName,
            email: facebookProfile.emails[0].value,
          },
        });
        return newUser;
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  async changeStatus(id: string, changeStatus: ChangeStatusInput) {
    const arrStatus = ['active', 'away', 'offline'];
    const user = await this.findOneById(id);
    if (user) {
      if (arrStatus.includes(changeStatus.status)) {
        user.statusChat = changeStatus.status;
        user.save();
      } else {
        throw new NotFoundException('Not Found Status');
      }
    }
    return user;
  }
  async removeAll(query: any) {
    return await this.userModel.deleteMany(query);
  }
  async initUserServer() {
    await this.userModel.updateMany(
      {},
      {
        statusChat: 'offline',
        deviceCount: 0,
      },
    );
  }
}
