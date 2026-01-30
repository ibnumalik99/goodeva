import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 'created' })
  status: string;

  @Column({ type: 'text', nullable: true })
  problem_desc?: string;

  @CreateDateColumn()
  created_at: Date;
}
