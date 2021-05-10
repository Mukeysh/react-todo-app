import { React, useState } from "react";
const AddToDo = (props) => {
  const [value, setValue] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      props.additem(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-todo-form">
      <input
        type="text"
        placeholder="add details"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className=""
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddToDo;
