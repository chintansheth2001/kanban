import PopupMenu from "./PopupMenu";
import { Message, Folder2 } from "iconsax-react";
import av2 from "../assets/av2.jpg";
import av3 from "../assets/av3.jpg";
import av4 from "../assets/av4.jpg";

function TaskCard() {
  return (
    <div className="task-card">
      <div className="card-info">
        <div className="priority-row">
          <span className="priority-row-text">Low</span>

          <PopupMenu
            right={true}
            trigger={<span className="priority-row-more">. . .</span>}
          />
        </div>
        <h2 className="card-title">Brainstorming</h2>
        <p className="card-detais">
          Brainstorming brings team members' diverse experience into play.{" "}
        </p>
      </div>
      <div className="card-footer">
        <div className="card-users">
          <img className="avtar" src={av2} alt="User Name" />
          <img className="avtar" src={av3} alt="User Name" />
          <img className="avtar" src={av4} alt="User Name" />
        </div>
        <div className="card-sta">
          <span className="card-sta-item">
            <Message size="16" color="#787486" /> 10 comments
          </span>
          <span className="card-sta-item">
            <Folder2 size="16" color="#787486" />3 files
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
