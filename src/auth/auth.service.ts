import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { signInDto } from './dtos/singin.dto';
import { UserEntity } from 'src/users/entity/user.entity';
import { loginDto } from './dtos/login.dto';
import {  JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService
    ) {}

  async signIn(loginDto: loginDto): Promise<any> {
    const { username, password } = loginDto;
    const user = await this.usersService.findOne(username);
    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }
    // const { password: _, ...result } = user;
    // const payload = { id: user.id, username: user.username,  age:user.age, email:user.email, lastname:user.lastname };
    const payload = { id: user.id, username: user.username , lastname:user.lastname};

     
    // const token=await this.jwtService.signAsync(payload, {secret: "my--screate"})
    // return {
    //   access_token: token,
    // };
    const token=await this.jwtService.signAsync(payload, {
      secret: 'my--screate',
      expiresIn: '60s',
    }) 
    return{
      access_token:token
    }
  
  }

  async register(signInDto: signInDto): Promise<Partial<UserEntity>> {
    const user = await this.usersService.createUser(signInDto);
    const { password: _, ...result } = user;
    return result;
  }
  
}

