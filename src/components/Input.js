import React from "react";

const Input = (props) => {
  return (
    <>
      <input {...props.input} />
      <label htmlFor={props.input.id}>{props.label}</label>
    </>
  );
};

export default Input;
