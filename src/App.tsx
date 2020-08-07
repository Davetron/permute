import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [];

function App() {
  
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  
  const deleteTodo = (selectedTodo: Todo) => {
    
    console.log("Current Todos" + todos);
    console.log("deleting:" + selectedTodo);

    const newTodos = todos.filter(todo => {
      return todo !== selectedTodo;
    });

    console.log("New Todos" + newTodos);
    setTodos(newTodos);
  };

  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    <AddTodoForm addTodo={addTodo}/>
    </>
    );
}

export default App;
