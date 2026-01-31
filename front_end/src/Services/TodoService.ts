import axios from 'axios';
import { Todo } from '../Types/todo';

const BASE_URL = 'http://localhost:3001/api/todos';

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
};

export const createTodo = async (data: Partial<Todo>) => {
  const { id, ...payload } = data;
  const res = await axios.post(`${BASE_URL}`, payload);
  return res.data;
}

export const updateTodo = async (data: Partial<Todo>) => {
  console.log(`id ${data.id}`)
  const { id, ...payload } = data;
  const res = await axios.patch(`${BASE_URL}/${data.id}`, payload);
  return res.data;
}

export const searchTodo = async (keyword: string) => {
  const res = await axios.get(`${BASE_URL}/search`, { params: { keyword } });
  return res.data;
}