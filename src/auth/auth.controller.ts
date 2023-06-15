// // import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
// // import { AuthService } from './auth.service';
// // import { signInDto } from './dtos/singin.dto';
// // import { UserEntity } from 'src/users/entity/user.entity';

// // @Controller('auth')
// // export class AuthController {
// //   constructor(private authService: AuthService) {}

// //   @HttpCode(HttpStatus.OK)
// //   @Post('login')
// //   signIn(@Body() signInDto: signInDto): Promise<Partial<UserEntity>>{
// //     return this.authService.signIn(signInDto);
// //   }
// // }
// import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { signInDto } from './dtos/singin.dto';
// import { UserEntity } from 'src/users/entity/user.entity';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @HttpCode(HttpStatus.OK)
//   @Post('login')
//   signIn(@Body() signInDto: signInDto): Promise<Partial<UserEntity>> {
//     return this.authService.signIn(signInDto);
//   }

//   @HttpCode(HttpStatus.CREATED)
//   @Post('register')
//   register(@Body() signInDto: signInDto): Promise<Partial<UserEntity>> {
//     return this.authService.register(signInDto);
//   }
// }
// auth.controller.ts
import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dtos/singin.dto';
import { UserEntity } from 'src/users/entity/user.entity';
import { loginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: loginDto): Promise<Partial<UserEntity>> {
    return this.authService.signIn(loginDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() signInDto: signInDto): Promise<Partial<UserEntity>> {
    return this.authService.register(signInDto);
  }
}