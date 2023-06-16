import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [ 
      
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'authentication',
    password: 'ahmed',
    database: 'authentication',
    entities: [UserEntity],
    synchronize: true,
  }),
     AuthModule,
     JwtModule,
     UsersModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
