import React from "react";
import Task from "./Task";

const TaskList = props => {
  const {tasks, handleDelete} = props;
  return (
    <React.Fragment>
      { tasks.map((task, id) => (
        <Task
          key={id}
          id={id}
          handleDelete={handleDelete}
          value={task.taskText}
        />
        ))
      }
    </React.Fragment>
  );
};

export default TaskList;