import { Controller, Get, Post, Patch, Param, Body, Query, HttpStatus } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ParseIntPipe } from '@nestjs/common';

@Controller('api/todos')
export class TodosController {
  constructor(private service: TodosService) {}

  @Get()
  async getData() {
    const results = await this.service.getAll();
    return results;
  }

  @Post()
  async create(@Body() dto: CreateTodoDto) {
    const data = await this.service.create(dto);
    return {
      statusCode: HttpStatus.CREATED,
      message: "Todo successfully saved",
      data: data
    }
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTodoDto) {
    const data = await this.service.update(id, dto);
    return {
      statusCode: HttpStatus.OK,
      message: `Todo successfully updated`,
      data: data
    }
  }

  // search
  @Get('search')
  async search(@Query('keyword') keyword: string) {
    const results = await this.service.search(keyword);
    return results;
  }
}
