import React, { useState } from 'react';

function TodoInput(props) {
  //useState declares state var called 'text' and state setter fn 'setText'
  //text is initialized with an empty string ''
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  //submitting form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      props.onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='postField'>
      <input
        type='text'
        value={text}
        onChange={handleInputChange}
        placeholder='What would you like to do today?'
        className='form-control form-control-lg'
      />
    </form>
  );
}

export default TodoInput;
