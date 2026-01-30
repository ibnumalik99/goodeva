import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  
  @IsEnum(['created','completed','on_going','problem'])
  status: string;

  @IsOptional()
  @IsString()
  problem_desc?: string;
}
