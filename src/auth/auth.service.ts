import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { signInDto } from './dtos/singin.dto';
import { UserEntity } from 'src/users/entity/user.entity';
import { loginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  private activeSessions: string[] = [];
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

    const payload = { id: user.id, username: user.username, lastname: user.lastname };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: 'my--screate',  
      expiresIn: '60s',
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: 'my--screate',
      expiresIn: '30d',
    });

    this.activeSessions.push(accessToken);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

 async refreshToken(refreshToken: string): Promise<any> {
  try {
    const payload = await this.jwtService.verifyAsync(refreshToken, {
      secret: 'my--screate',
    });

    const { id, username, lastname } = payload;

    const newPayload = { id, username, lastname };

    const accessToken = await this.jwtService.signAsync(newPayload, {
      secret: 'my--screate',
      expiresIn: '2m',
    });

    return {
      access_token: accessToken,
    };
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw new UnauthorizedException('Invalid refresh token');
  }
}


  async register(signInDto: signInDto): Promise<Partial<UserEntity>> {
    const user = await this.usersService.createUser(signInDto);
    const { password: _, ...result } = user;
    return result;
  }

  async logout    (token: string): Promise<void> {

    const index = this.activeSessions.indexOf(token);
  
    
    if (index !== -1) {
      this.activeSessions.splice(index, 1);
    }
  }
  
}
