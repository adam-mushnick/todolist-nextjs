import React from 'react';

function TodoItem(props) {
  const { todo, onDelete, onCheckboxChange, stripeColor } = props;

  function handleCheckboxChange() {
    if (onCheckboxChange) {
      onCheckboxChange(todo.id);
    }
  }

  function handleDelete() {
    if (onDelete) {
      onDelete(todo.id);
    }
  }

  return (
    <li
      className={`list-group-item border-0 rounded h5 text-center d-flex align-items-center ${stripeColor}
      }`}
    >
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={handleCheckboxChange}
        className='me-auto'
      />
      <div className='d-flex flex-grow-1 justify-content-start ms-3 me-4'>
        <span className={`${todo.completed ? 'checked' : ''}`}>
          {todo.text}
        </span>
      </div>
      <span onClick={handleDelete} className='close ms-auto'>
        X
      </span>
    </li>
  );
}

export default TodoItem;
