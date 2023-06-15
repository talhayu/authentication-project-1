// // import { Injectable, UnauthorizedException } from '@nestjs/common';
// // import { UsersService } from 'src/users/users.service';
// // import { signInDto } from './dtos/singin.dto';
// // import { UserEntity } from 'src/users/entity/user.entity';

// // @Injectable()

// // export class  AuthService {
// //     register(signInDto: signInDto): Promise<Partial<UserEntity>> {
// //       throw new Error('Method not implemented.');
// //     }
// //     constructor(private usersService: UsersService) {}
  
// //     async signIn(signInDto: signInDto): Promise<Partial<UserEntity>> {
// //       const   {username, password: pass}=signInDto
// //       const user = await this.usersService.findOne(username);
// //       if (user?.password !== pass ) {
// //         throw new UnauthorizedException();
// //       }
// //       const { password,  ...result } = user;
// //       return result;
// //     }
// //   }
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from 'src/users/users.service';
// import { signInDto } from './dtos/singin.dto';
// import { UserEntity } from 'src/users/entity/user.entity';

// @Injectable()
// export class AuthService {
//   constructor(private usersService: UsersService) {}

//   async signIn(signInDto: signInDto): Promise<Partial<UserEntity>> {
//     const { username, password: pass } = signInDto;
//     const user = await this.usersService.findOne(username);
//     if (user?.password !== pass) {
//       throw new UnauthorizedException();
//     }
//     const { password, ...result } = user;
//     return result;
//   }

//   async register(signInDto: signInDto): Promise<Partial<UserEntity>> {
//     const user = await this.usersService.createUser(signInDto);
//     const { password, ...result } = user;
//     return result;
//   }
// }
// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { signInDto } from './dtos/singin.dto';
import { UserEntity } from 'src/users/entity/user.entity';
import { loginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(loginDto: loginDto): Promise<Partial<UserEntity>> {
    const { username, password } = loginDto;
    const user = await this.usersService.findOne(username);
    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }
    const { password: _, ...result } = user;
    return result;
  }

  async register(signInDto: signInDto): Promise<Partial<UserEntity>> {
    const user = await this.usersService.createUser(signInDto);
    const { password: _, ...result } = user;
    return result;
  }
  
}

