import React, { useRef } from "react";
import "./InputField.scss";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="task"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="task__input"
        type="text"
        placeholder="add a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="task__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
