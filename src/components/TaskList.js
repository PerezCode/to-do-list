import React from "react";
import Task from "./Task";

const TaskList = props => {
  return (
    <React.Fragment>
      { props.tasks.map((task, id) => (
        <Task
          value={task}
          key={id}
        />
        ))
      }
    </React.Fragment>
  );
};

export default TaskList;