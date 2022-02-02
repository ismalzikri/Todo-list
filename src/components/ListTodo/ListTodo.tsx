import React from "react";
import { Todo } from "../../model";
import ListTodoItem from "./ListTodoItem/ListTodoItem";

import './ListTodo.scss'

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
 
const ListTodo: React.FC<Props> = ({todos, setTodos}) => {
  return(
    <div className="container">
      <div className="list">
        <span className="list__heading">Backlog</span>
        {todos.map((todo) => (
          <ListTodoItem 
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="list">
        <span className="list__heading done">Done</span>
        {todos.map((todo) => (
          <ListTodoItem 
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTodo;
