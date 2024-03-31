import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function TodoItem(props) {
  return (
    <div className='list-item'>
      <span className="list-text">{props.todo}</span>
      <button
        onClick={props.onDelete}
        className='delete-button'
      >delete</button>
    </div>
  )
}

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
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => {
                const newTodos = [...todos];
                newTodos.splice(index, 1);
                setTodos(newTodos);
              }}
            />
          ))}
        </div>
    </div>
  );
}

export default App;
