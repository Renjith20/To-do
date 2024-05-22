// src/ToDoForm.js
import React, { useState, useEffect } from 'react';

const ToDoForm = ({ addTodo, editTodo, updateTodo }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (editTodo) {
      setInputValue(editTodo.text);
    } else {
      setInputValue('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editTodo) {
      updateTodo(editTodo.id, inputValue);
    } else {
      addTodo(inputValue);
    }

    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">{editTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ToDoForm;
