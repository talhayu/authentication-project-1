  import { ConflictException, Injectable } from "@nestjs/common";
  import { DataSource, Repository } from "typeorm";
  import { UserEntity } from "./entity/user.entity";

  @Injectable()
  export class UserRepository extends Repository<UserEntity> {
    constructor(private dataSource: DataSource) {
      super(UserEntity, dataSource.createEntityManager());
    }

    async findUserDetails(username: string): Promise<UserEntity | undefined> {
      return this.findOneBy({ username });
    }

    async createUser(user: UserEntity): Promise<UserEntity> {
      try {
        return await this.save(user);
      } catch (error) {
        
        if (error.code === "23505" && error.detail.includes("already exists")) {
          throw new ConflictException("Username already exists.", "CustomErrorCode");
        }
        throw error; 
      }
    }
  }