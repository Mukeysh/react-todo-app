import React from "react";
import Input from "./Input";

const ActiveToDo = (props) => {
  return (
    <ul className="todo-list">
      {props.data.map((item) => {
        if (item.completed !== true) {
          return (
            <li key={item.id}>
              <Input
                label={item.todo}
                input={{
                  id: "amount_" + item.id,
                  type: "checkbox",
                  checked: false,
                  readOnly: true,
                }}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ActiveToDo;
