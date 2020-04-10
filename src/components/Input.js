import React from "react";

const Input = (props) => {
  const {onSubmit, value, onChange} = props;
  return (
    <form className="container">
      <div className="row form-group">
        <div className="pl-0 col">
          <input
            type="text"
            value={value.taskText}
            onChange={onChange}
            className="new-task"
            placeholder="Enter a new task"
          />
        </div>
        <div className=" p-0 col-2">
          <button onClick={onSubmit} type="submit" className="btn btn-primary btn-add p-0">Add</button>
        </div>
      </div>
    </form>
  );
};

export default Input;
