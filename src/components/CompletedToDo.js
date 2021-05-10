import React from "react";
import Input from "./Input";

export const CompletedToDo = (props) => {
  return (
    <ul className="todo-list">
      {props.data.map((item) => {
        if (item.completed === true) {
          return (
            <Input
              key={item.id}
              label={item.todo}
              input={{
                id: "amount_" + item.id,
                type: "checkbox",
                checked: true,
                className: "completed",
                readOnly: true,
              }}
            />
          );
        }
      })}
    </ul>
  );
};
