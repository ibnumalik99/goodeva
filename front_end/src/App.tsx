import './App.css';
import { Todo } from './Types/todo';
import TodoList from './Pages/TodoList';
import { useEffect, useState } from 'react';
import { getAllTodos } from './Services/TodoService';
import { Route, Routes } from 'react-router-dom';
import TodoForm from './Pages/TodoForm';

function App() {
    return (
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/create" element={<TodoForm />} />
            <Route path="/update" element={<TodoForm />} />
        </Routes>
    );
}

export default App;
