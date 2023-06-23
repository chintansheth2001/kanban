import PopupMenu from "./PopupMenu";
import "./TasksBox.scss";
import Add from "../assets/add-square.svg";
import TaskCard from "./TaskCard";

function TasksBox({ color, title, addBtn, tasks }) {
  return (
    <div className={`tasks-box ${color} `}>
      <div className="tasks-box-title">
        <div className="tasks-box-dot" />
        <div className="tasks-box-text">{title}</div>
        <div className="tasks-box-no">4</div>
        {addBtn && (
          <PopupMenu
            right={true}
            trigger={<img className="tasks-box-add" src={Add} alt="Add task" />}
          />
        )}
      </div>
      {tasks.map((i) => (
        <TaskCard key={i.id} {...i} />
      ))}
    </div>
  );
}

export default TasksBox;
