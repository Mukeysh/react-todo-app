import React from "react";
import Input from "./Input";
import { TrashIcon } from "@heroicons/react/outline";

export const CompletedToDo = (props) => {
  return (
    <>
      <ul className="todo-list">
        {props.data.map((item) => {
          if (item.completed === true) {
            return (
              <li key={item.id}>
                <Input
                  label={item.todo}
                  input={{
                    id: "amount_" + item.id,
                    type: "checkbox",
                    checked: true,
                    className: "completed",
                    readOnly: true,
                  }}
                />
                <button
                  type="submit"
                  onClick={() => props.delete(item.id)}
                  className="delete"
                >
                  <TrashIcon size={18} />
                </button>
              </li>
            );
          }
        })}
      </ul>
      {props.data.filter((item) => item.completed === true).length > 0 && (
        <div className="delete-all">
          <button type="submit" onClick={props.deleteAll}>
            <TrashIcon size={18} /> delete all
          </button>
        </div>
      )}
    </>
  );
};
