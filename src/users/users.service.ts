import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from '../users/user.repositry';
import { signInDto } from 'src/auth/dtos/singin.dto';


@Injectable()
export class UsersService {
  loggedUsers: any;
  findById(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly userRepository: UserRepository,

    ) {}

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.userRepository.findUserDetails(username);
  }

  async createUser(signInDto: signInDto): Promise<UserEntity> {
    const user = this.userRepository.create(signInDto);
    return this.userRepository.save(user);
  }
  
  
}

