import React from "react";

const Input = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        className="new-task"
        placeholder="Enter a new task..."
      />
    </form>
  );
};

export default Input;
