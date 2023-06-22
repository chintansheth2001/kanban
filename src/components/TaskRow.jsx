import "./TaskRow.scss";
import TasksBox from "./TasksBox";

function TaskRow() {
  return (
    <div className="task-row">
      <TasksBox />
      <TasksBox />
      <TasksBox />
    </div>
  );
}

export default TaskRow;
