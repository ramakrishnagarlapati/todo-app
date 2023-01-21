import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  const renderTodoForm = (edit) => {
    return (
      <>
        <input
          type="text"
          placeholder={edit ? "Update Your Item" : "Add a Todo"}
          name="text"
          value={input}
          className={`todo-input ${edit ? "edit" : ""}`}
          onChange={handleChange}
          ref={inputRef}
        />
        <button className={`todo-button ${edit ? "edit" : ""}`}>
          {edit ? "Update" : "Add Todo"}
        </button>
      </>
    );
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {renderTodoForm(props.edit)}
    </form>
  );
};

export default TodoForm;
