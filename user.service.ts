import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(username: string): Promise<User> {
    const newUser = new this.userModel({ username });
    return newUser.save();
  }

  async findUser(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }
}
