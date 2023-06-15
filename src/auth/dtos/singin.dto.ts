    import { IsNotEmpty, IsString, IsEmail, MinLength, Matches, IsInt, Min, MaxLength, ValidationError, Validate, IsOptional } from 'class-validator';
    import { MatchesConstraint } from 'src/common/decorator/match.decorators.properties';

    export class signInDto {
      @IsNotEmpty()
      @IsString()
      username: string;

      @IsOptional()
      @IsString()
      lastname:string

      @IsNotEmpty()
      @IsString()
      @MinLength(8)
      @MaxLength(15)
      @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/, {message: "password error"})
      password: string;
      
      @IsNotEmpty()
      @IsString()
      @Validate(MatchesConstraint, ['password'])
      confirmpassword: string; 

      @IsNotEmpty()
      @IsEmail({}, {message: "invalid email "})
      email: string;

      @IsNotEmpty()
      @IsInt()
      age: number;

    
    }
