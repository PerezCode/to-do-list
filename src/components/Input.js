import React from "react";

const Input = (props) => {
  return (
    <form className="container" onSubmit={props.onSubmit}>
      <div className="row form-group">
        <div className="pl-0 col">
          <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            className="new-task"
            placeholder="Enter a new task"
          />
        </div>
        <div className=" p-0 col-2">
          <button onClick={props.onSubmit} type="button" className="btn btn-primary btn-add p-0">Add</button>
        </div>
      </div>
    </form>
  );
};

export default Input;
