import React from "react";
import { Todo } from "../../model";
import ListTodoItem from "./ListTodoItem/ListTodoItem";

import './ListTodo.scss'
import { Droppable } from "react-beautiful-dnd";

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos:Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
 
const ListTodo: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return(
    <div className="container">
      <Droppable droppableId="TodoList"> 
        {(provided) => (
          <div className="list" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="list__heading">Backlog</span>
            {todos.map((todo, index) => (
              <ListTodoItem 
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div className="list" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="list__heading done">Done</span>
            {completedTodos.map((todo, index) => (
              <ListTodoItem 
                index={index}
                todo={todo}
                todos={completedTodos}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ListTodo;
