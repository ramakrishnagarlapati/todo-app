import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    setTodos([todo, ...todos]);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === todoId) {
          return newValue;
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="todo-app">
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
