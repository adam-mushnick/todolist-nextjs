import React, { useEffect, useState } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/custom.scss';
import SplashPage from '../../components/SplashPage';
import TodoList from '../../components/TodoList';
import TodoInput from '../../components/TodoInput';
import TodoItem from '../../components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localStorageSupported =
      typeof window !== 'undefined' && window.localStorage !== undefined;

    // Get todos from local storage if it's supported
    if (localStorageSupported) {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(storedTodos);
      console.log(todos);
    }
  }, []);

  //delete items
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  //check items
  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  //new items
  const handleSubmit = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    console.log(todos);
  };

  return (
    <div className='container'>
      //show if no todos
      <div className={`${todos.length ? 'd-none' : ''}`}>
        <SplashPage />
      </div>
      //hide if no todos
      <div
        className={`row d-flex justify-content-center ${
          todos.length ? '' : 'd-none'
        }`}
      >
        <div className='col-8 text-center mt-5 mb-2'>
          <h1 className='text-light'>TO-DO</h1>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-8 text-center mb-3'>
          <TodoInput onSubmit={handleSubmit} />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <TodoList
            todos={todos}
            onDelete={handleDelete}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
