// src/ToDoList.js
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, deleteTodo, startEditing }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} startEditing={startEditing} />
      ))}
    </ul>
  );
};

export default ToDoList;
