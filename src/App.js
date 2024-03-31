import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TextField, List, ListItem, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <TextField
          type="text"
          placeholder="Enter a todo"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTodos([...todos, e.target.value]);
              e.target.value = "";
            }
          }}
        />
        <List style={{
          width: '100%',
          maxWidth: 360,
          backgroundColor: 'white',
          marginTop: 10
        }}>

          {todos.map((todo, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton onClick={() => {
                  const newTodos = [...todos];
                  newTodos.splice(index, 1);
                  setTodos(newTodos);
                }}>
                  <DeleteIcon />
                </IconButton>
              }
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <ListItemText primary={todo} />
            </ListItem>
          ))}
        </List>
    </div>
  );
}

export default App;
