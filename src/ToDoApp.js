// src/ToDoApp.js
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, id: Date.now() }];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id, newText) => {
    const newTodos = todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
    setEditTodo(null);
  };

  const startEditing = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setEditTodo(todo);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <ToDoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} startEditing={startEditing} />
    </div>
  );
};

export default ToDoApp;
