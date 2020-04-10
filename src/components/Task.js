import React from "react";

const Task = props => {
  const {value, id, handleDelete} = props;
  return (
    <div className="task-container">
      <div className="container">
        <div className="row">
          <div className="col-10 pr-0">
            <h3 className="task-text">{value}</h3>
          </div>
          <div className="col-2 p-0 d-flex justify-content-end">
            <button
              onClick={() => {handleDelete(id)}}
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
