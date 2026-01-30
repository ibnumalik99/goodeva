import { DataSource } from 'typeorm';
import { Todo } from './todos/todo.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Password123',
  database: 'goodeva',
  entities: [Todo],
  migrations: ['src/migrations/*.ts'],
});
