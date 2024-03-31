import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TextField, List, ListItem, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const isValid = error === null;
  console.log(isValid);

  console.log(todos);

  return (
    <div className='container'>
        <h1>Todo App</h1>
        <TextField
          error={isValid === false}
          id="standard-error-helper-text"
          label={isValid ? "Add todo" : "Error"}
          helperText={isValid ? "" : "Incorrect"}
          variant="standard"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = e.target.value;
              if (value !== "") {
                setError(null);
                const newTodos = [...todos];
                newTodos.push(value);
                setTodos(newTodos);
                e.target.value = "";
              } else {
                setError("Error: Please enter value what are you doing ??");
              }
            }
          }}
        />
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {todos.map((value, index) => (
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
            >
              <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
    </div>
  );
}

export default App;
