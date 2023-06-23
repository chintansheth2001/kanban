import PopupMenu from "./PopupMenu";
import Add from "../assets/add-square.svg";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";
import "./TasksBox.scss";

function TasksBox({ id, color, title, addBtn, tasks }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          className={`tasks-box ${color} `}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="tasks-box-title">
            <div className="tasks-box-dot" />
            <div className="tasks-box-text">{title}</div>
            <div className="tasks-box-no">{tasks.length}</div>
            {addBtn && (
              <PopupMenu
                right={true}
                trigger={
                  <img className="tasks-box-add" src={Add} alt="Add task" />
                }
              />
            )}
          </div>
          {tasks.map((i, index) => (
            <TaskCard key={i.id} index={index} {...i} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TasksBox;
