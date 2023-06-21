import { IsNotEmpty, IsString } from 'class-validator'; 

// export class loginDto {
//   @IsNotEmpty()
//   @IsString()
//   username: string;

//   @IsNotEmpty()
//   @IsString()
//   password: string;
// }
export class loginDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  refreshToken: string; // Add this property
}
