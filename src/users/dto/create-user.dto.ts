import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  isString,
} from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['user', 'admin', 'moderator'], {
    message: 'Role must be user, admin or moderator',
  })
  role: 'user' | 'admin' | 'moderator';
}
