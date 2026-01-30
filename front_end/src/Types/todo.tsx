export interface Todo {
  id: number;
  title: string;
  status: 'created' | 'completed' | 'on_going' | 'problem';
  problem_desc?: string;
  createdAt: string;
}