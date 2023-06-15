// import { Injectable } from '@nestjs/common';
// import { UserEntity } from './entity/user.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { UserRepository } from './user.repositry';
// import { signInDto } from 'src/auth/dtos/singin.dto';

// export type User = any;

// @Injectable()
// export class UsersService {
//   createUser(signInDto: signInDto) {
//     throw new Error('Method not implemented.');
//   }
// constructor(private readonly userRepository: UserRepository){

// }
//  async findOne(username: string): Promise<UserEntity | undefined>{
//   return this.userRepository.findUserDetails(username)
//  }
   
// }
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
