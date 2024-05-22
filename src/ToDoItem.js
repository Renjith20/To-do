// src/ToDoItem.js
import React from 'react';

const ToDoItem = ({ todo, deleteTodo, startEditing }) => {
  return (
    <li>
      {todo.text}
      <div>
        <button id ="edit" onClick={() => startEditing(todo.id)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;
