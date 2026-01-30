import axios from 'axios';
import { Todo } from '../Types/todo';

const BASE_URL = 'http://localhost:3001/api/todos';

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
};