import 'reflect-metadata';
import { IsDefined, IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class LoginBodyDto {

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value && value.trim() ? value.trim().toLowerCase() : null)
  @Expose()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  /**
   * Should contains:
   *
   * - at least one digit
   * - at least one lowercase char
   * - at least one uppercase chat
   * - at least 8 chars
   */
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!$£%^&#@°*()_+|~=`{§}\[\]:";'<>?,.\/-]{8,}$/)
  @Expose()
  password: string;

}
