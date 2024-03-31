import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
        <h1>Todo App</h1>
        <input
          type="text"
          placeholder="Enter a todo"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTodos([...todos, e.target.value]);
              e.target.value = "";
            }
          }}
          className='input'
        />
        <div
          className='list'
        >
          {todos.map((todo, index) => (
            <div
              key={index}
              className='list-item'
            >
                <span className="list-text">{todo}</span>
                <button
                  onClick={() => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                  className='delete-button'
                >delete</button>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
