import React from "react";

const Task = props => {
  return (
    <div className="task-container" key={props.id}>
      <h3 className="task">{props.value}</h3>
      <div className="button-container">
        <button
          onClick={() => {props.handleDelete(props.id)}}
          className="delete-button"
        >
        X
        </button>
      </div>
    </div>
  );
};

export default Task;
