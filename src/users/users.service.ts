
import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repositry';
import { signInDto } from 'src/auth/dtos/singin.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.userRepository.findUserDetails(username);
  }

  async createUser(signInDto: signInDto): Promise<UserEntity> {
    const user = this.userRepository.create(signInDto);
    return this.userRepository.save(user);
  }
}
