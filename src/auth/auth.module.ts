import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: "my--screate",
      signOptions: { expiresIn: '5s' },
    }),
  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [AuthService, JwtService]
})
export class AuthModule {}