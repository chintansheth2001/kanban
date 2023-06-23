import PopupMenu from "./PopupMenu";
import { Message, Folder2 } from "iconsax-react";
import { Draggable } from "react-beautiful-dnd";
import "./TaskCard.scss";
function TaskCard({
  id,
  title,
  text,
  users,
  comments,
  files,
  priority,
  image,
  index,
}) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="task-card"
          id={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card-info">
            <div className="priority-row">
              <span className={`priority-row-text ${priority}`}>
                {priority}
              </span>

              <PopupMenu
                right={true}
                trigger={<span className="priority-row-more">. . .</span>}
              />
            </div>
            <h2 className="card-title">{title}</h2>
            {text && <p className="card-detais">{text}</p>}
            {image && <img src={image} alt={title} />}
          </div>
          <div className="card-footer">
            {users && (
              <div className="card-users">
                {users.map((i, ind) => (
                  <img key={ind} className="avtar" src={i} alt="User Name" />
                ))}
              </div>
            )}
            <div className="card-sta">
              <span className="card-sta-item">
                <Message size="16" color="#787486" /> {comments} comments
              </span>
              <span className="card-sta-item">
                <Folder2 size="16" color="#787486" />
                {files} files
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
