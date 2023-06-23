import React from "react";
import "./TaskRow.scss";
import TasksBox from "./TasksBox";
import { AppContext } from "./AppContext";

function TaskRow() {
  const [state, dispatch] = React.useContext(AppContext);
  const { projects } = state;

  const activeProject = projects.filter((i) => i.active);
  const { tasksCol } = activeProject[0];
  console.log(tasksCol);

  return (
    <div className="task-row">
      {tasksCol.map((i) => (
        <TasksBox
          key={i.id}
          color={i.color}
          title={i.title}
          addBtn={i.id === 1}
          tasks={i.tasks}
        />
      ))}
    </div>
  );
}

export default TaskRow;
