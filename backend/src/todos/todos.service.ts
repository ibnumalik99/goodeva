import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private repo: Repository<Todo>,
  ) {}

    async getAll(): Promise<Todo[]> {
      return this.repo.find({
        order: { id: 'ASC' }
      });
    }


  async create(dto: CreateTodoDto) {
    const todo = this.repo.create(dto);
    await this.repo.save(todo);
    return this.getAll();
  }

  async update(id: number, data: UpdateTodoDto) {
    const todo = await this.repo.findOne({ where: {id} });
    if (!todo) {
      throw new NotFoundException(`Todo tidak ditemukan`)
    }

    // merge
    const updatedTodo = this.repo.merge(todo, data);
    await this.repo.save(updatedTodo);
    return this.getAll();
  }

  async search(keyword: string) {
    if (!keyword) {
      return [];
    }

    const todos = await this.repo.find({
      where: [
        
        {title: ILike(`%${keyword}%`)},
        {status: ILike(`%${keyword}%`)},
        {problem_desc: ILike(`%${keyword}%`)}
        
      ]
    })

    return todos;
  }
}
