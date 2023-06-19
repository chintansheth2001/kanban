import React from "react";
import Add from "../assets/add-square.svg";
import TaskCard from "./TaskCard";

function TasksBox() {
  return (
    <div className="tasks-box">
      <div className="tasks-box--title">
        <div className="tasks-box--dot" />
        <div className="tasks-box--text">To Do </div>
        <div className="tasks-box--no">4</div>
        <img className="tasks-box--add" src={Add} alt="Add task" />
      </div>
      <TaskCard />
    </div>
  );
}

export default TasksBox;
