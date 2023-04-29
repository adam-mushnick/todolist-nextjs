import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, onDelete, onCheckboxChange } = props;

  return (
    <ul className='list-group list-group-flush mx-5'>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onCheckboxChange={onCheckboxChange}
          stripeColor={index % 2 === 0 ? 'stripe' : ''}
        />
      ))}
    </ul>
  );
}

export default TodoList;
