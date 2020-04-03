import React from "react";

const Task = props => {
  return (
    <div className="task-container" key={props.id}>
      <div className="container">
        <div className="row">
          <div className="col-10 pr-0">
            <h3 className="task">{props.value}</h3>
          </div>
          <div className="col-2 p-0 d-flex justify-content-end">
            <button
              onClick={() => {props.handleDelete(props.id)}}
              className="btn btn-danger mt-2 mr-2 delete-button"
            >
            X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
