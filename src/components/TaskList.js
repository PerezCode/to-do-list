import React from "react";
import Task from "./Task";

const TaskList = props => {
  return (
    <React.Fragment>
      { props.tasks.map((task, id) => (
        <Task
          key={id}
          id={id}
          handleDelete={props.handleDelete}
          value={task}
        />
        ))
      }
    </React.Fragment>
  );
};

export default TaskList;