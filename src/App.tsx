import React, { useState } from 'react';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import './App.scss';
import InputField from './components/InputField/InputField';
import ListTodo from './components/ListTodo/ListTodo';
import { Todo } from './model';


function App() {

  const [todo, setTodo] = useState<string>(""); 
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    console.log(result)
  }

  return (
    <DragDropContext onDragEnd={(onDragEnd) => {}}>
      <div className="App">
        <span className='title_head'>Todo-App</span>
        <InputField todo= {todo} setTodo= {setTodo} handleAdd= {handleAdd} />
        <ListTodo
          todos={todos}
          setTodos={setTodos} 
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
