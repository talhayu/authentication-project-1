import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dtos/singin.dto';
import { UserEntity } from 'src/users/entity/user.entity';
import { loginDto } from './dtos/login.dto';
import { AuthGuard, Public } from 'src/guards/auth.guard';
import { RefreshTokenDto } from './dtos/refreshtoken.dto';



@Controller('auth')
export class AuthController {
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

  // @UseGuards(AuthGuard)
  // @Public()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('refresh')
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto): Promise<any> {
    const { refreshToken } = refreshTokenDto;
    return this.authService.refreshToken(refreshToken);
  }
 
}
