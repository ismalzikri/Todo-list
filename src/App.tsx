import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import ListTodo from './components/ListTodo/ListTodo';
import { Todo } from './model';

function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false
        }   
      ])
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className='title_head'>Todo-App</span>
      <InputField todo= {todo} setTodo= {setTodo} handleAdd= {handleAdd} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
