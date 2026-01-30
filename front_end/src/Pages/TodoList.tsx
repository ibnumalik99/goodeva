import React from 'react';
import { Todo } from '../Types/todo';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr>
                  <th scope="row">{todo.title}</th>
                  <td>{todo.status}</td>
                  <td>{todo.problem_desc ? todo.problem_desc : "-"}</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" className="btn btn-primary">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  );
};

export default TodoList;
