      import { Module } from '@nestjs/common';
      import { UsersService } from './users.service';
      import { TypeOrmModule } from '@nestjs/typeorm';
      import { UserEntity } from './entity/user.entity';
      import { UserRepository } from './user.repositry';
  ;

      @Module({
        imports: [TypeOrmModule.forFeature([UserEntity]), ],
        providers: [UsersService, UserRepository],
        exports: [ UsersService],
      })
      export class UsersModule {}
      