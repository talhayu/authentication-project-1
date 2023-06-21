
import { EntityBase } from "src/base/base.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')
export class UserEntity extends EntityBase{ 
    @Column({unique: true})
    username:string

     @Column({nullable: true})
     lastname: string

    @Column()
    password:string

    @Column()
    age:number

    @Column({unique: true})
    email: string
  refreshToken: string;
  static refreshToken: void;



}   