import React from "react";
import Input from "./Input";

const ToDoList = (props) => {
  const onChangeHandler = (index) => {
    props.completed(index);
  };
  return (
    <ul className="todo-list">
      {props.data.map((item, index) => (
        <li key={item.id}>
          <Input
            label={item.todo}
            input={{
              id: "amount_" + item.id,
              type: "checkbox",
              checked: item.completed,
              className: item.completed ? "completed" : "",
              value: item.todo,
              onChange: () => onChangeHandler(index),
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
