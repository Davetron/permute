import React from 'react';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
      <li>
        <button onClick={() => { deleteTodo(todo); }}>x</button>
        <label
          style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        >
          <input 
            type="checkbox" 
            checked={todo.complete} 
            onClick={() => { toggleTodo(todo); }}
            /> 
            {todo.text}
        </label>
      </li>
    );
  };