import { IsEnum, IsNotEmpty, IsOptional, isString, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(['created','completed','on_going','problem'])
  status: string;

  @IsOptional()
  @IsString()
  problem_desc?: string
}
