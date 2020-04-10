import React from "react";
import Task from "./Task";

const TaskList = props => {
  const {tasks, handleDelete} = props;
  return (
    <React.Fragment>
      { tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          handleDelete={handleDelete}
          value={task.taskText}
        />
        ))
      }
    </React.Fragment>
  );
};

export default TaskList;