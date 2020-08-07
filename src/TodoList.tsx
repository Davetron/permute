import React from 'react';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      ))}
    </ul>
  );
};