import React, { useEffect, useState } from 'react';
import { Todo } from '../Types/todo';
import { useNavigate } from 'react-router-dom';
import { getAllTodos, searchTodo } from '../Services/TodoService';


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        try {
        const data = await getAllTodos();
        setTodos(data);
        } catch (error) {
        console.error('Gagal mengambil todos:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

  const navigate = useNavigate();
  function handleEdit (todo: any) {
    navigate("/update", { state: todo });
  }

  function handleCreate() {
    navigate("/create");
  }
  async function handleSearch(e: any) {
    const keyword = e.target.value;
    if (keyword) {
      const res = await searchTodo(keyword);
      setTodos(res);
    }
  }
  return (
    <div className='p-5'>
      <button type="button" className="btn btn-primary mb-2" onClick={handleCreate}>Create</button>
      <input type="text" className="form-control" onChange={handleSearch} placeholder='hearch keyword' />
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
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <th>{index + 1}</th>
                <th>{todo.title}</th>
                <td>{todo.status}</td>
                <td>{todo.problem_desc? todo.problem_desc : "-"}</td>
                <td>
                  <button type="button" className="btn btn-outline-secondary" onClick={() => handleEdit(todo)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};

export default TodoList;
