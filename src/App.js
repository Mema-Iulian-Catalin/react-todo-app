import { useState } from 'react';
import './App.css';
import ListOfTodos from './components/ListOfTodos';
import ToDoInput from './components/TodoInput';

const mockTodos = [
  { message: 'Todo 1' },
  { message: 'Todo 2' },
  { message: 'Todo 3' },
]

function App() {

  const [todos, setTodos] = useState(mockTodos)

  const addTodo = ( message ) => {
    if(!message.length){
      alert('Add message of the new todo')
      return
    }
    setTodos([...todos, { message }])
  }

  const deleteTodo = () => {
    //TODO: req to db for delete
  }

  return (
    <div className="app">
      <ToDoInput addTodo={addTodo}/>
      <ListOfTodos todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
