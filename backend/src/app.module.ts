import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Password123',
      database: 'goodeva',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TodosModule,
  ],
})
export class AppModule {}
