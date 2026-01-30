import './App.css';
import { Todo } from './Types/todo';
import TodoList from './Pages/TodoList';
import { useEffect, useState } from 'react';
import { getAllTodos } from './Services/TodoService';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        try {
        const data = await getAllTodos();
        setTodos(data);
        console.log(data)
        } catch (error) {
        console.error('Gagal mengambil todos:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className='p-5'>
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
