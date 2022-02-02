import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../../../model";
import './ListTodoItem.scss'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ListTodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit ] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  },[edit])

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map(( todo) => (todo.id === id ? {...todo, todo : editTodo} : todo )) 
    )
    setEdit(false)
  }

  const handleDone = ( id:number ) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
      )
    )
  }

  const handleDelete = ( id:number ) => {
    setTodos(
      todos.filter((todo)  => todo.id !== id)
    )
  }

  return (
    <form className="list__item --shadow" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="list__item--edit"
        />
      ) : todo.isDone ? (
          <s className="list__item--text">{todo.todo}</s>
      ): (
          <span className="list__item--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon icon--edit" onClick={() => {
          if(!edit && !todo.isDone) {
            setEdit(!edit)
          }
        }}>
          <AiFillEdit />
        </span>
        <span className="icon icon--delete" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon icon--done" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default ListTodoItem;
