import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(@Body('username') username: string) {
    if (!username || username.trim().length === 0) {
      throw new BadRequestException('Username is required');
    }
    const existingUser = await this.userService.findUser(username);
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }
    return this.userService.createUser(username);
  }
}
