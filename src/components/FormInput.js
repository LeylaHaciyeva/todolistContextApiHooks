import React, { useContext, useState, useRef, useEffect } from "react";
import { DataContext } from "./DataProvider";
export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
    todoInput.current.focus()
  };
  useEffect(() => {
    todoInput.current.focus()
  }, []);
  return (
    <div className="form">
      <form autoComplete="off" onSubmit={addTodo}>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="What need to be done?"
          ref={todoInput}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLowerCase())}
        />
        <button className="create-btn" type="submit">Create</button>
      </form>
    </div>
  );
}
