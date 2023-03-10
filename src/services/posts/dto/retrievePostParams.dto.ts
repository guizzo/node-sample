import 'reflect-metadata';
import { IsDefined, IsNotEmpty, IsNumberString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class RetrievePostParamsDto {

  @IsDefined()
  @IsNotEmpty()
  @IsNumberString()
  @Transform(({ value }) => +value)
  @Expose()
  post_id: number;

}
