import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, UnauthorizedException, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dtos/singin.dto';
import { UserEntity } from 'src/users/entity/user.entity';
import { loginDto } from './dtos/login.dto';
import { AuthGuard, Public } from 'src/guards/auth.guard';
import { RefreshTokenDto } from './dtos/refreshtoken.dto';



@Controller('auth')
export class AuthController {
  [x: string]: any;
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() loginDto: loginDto): Promise<any> {
    const tokens = await this.authService.signIn(loginDto);
    return tokens;
  }

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(@Body() signInDto: signInDto): Promise<Partial<UserEntity>> {
    return this.authService.register(signInDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('refresh')
async refreshToken(@Body() refreshTokenDto: RefreshTokenDto): Promise<any> {
  const { refreshToken } = refreshTokenDto;
  return this.authService.refreshToken(refreshToken);
}

  private extractTokenFromHeader(request: Request): string | undefined {
    const authorizationHeader = request.headers['authorization'];
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      return authorizationHeader.substring(7);
    }
    return undefined;
  }
  
  
  @Post('logout')
  @UseGuards(AuthGuard)
  async logout(@Req() request: Request) {
    try {
      await this.authService.logout(request['user']); 
      return { message: 'Logout successful' };
    } catch (error) {
      throw new UnauthorizedException('Logout failed');
    }
  }
  

 
}
