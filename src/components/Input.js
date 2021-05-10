import React from "react";

const Input = (props) => {
  return (
    <li>
      <input {...props.input} />
      <label htmlFor={props.input.id}>{props.label}</label>
    </li>
  );
};

export default Input;
