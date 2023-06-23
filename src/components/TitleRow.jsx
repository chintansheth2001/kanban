import React from "react";
import PopupMenu from "./PopupMenu";
import "./TitleRow.scss";
import Pencil from "../assets/edit.svg";
import Link from "../assets/link.svg";
import Add from "../assets/add-square.svg";
import av2 from "../assets/av2.jpg";
import av3 from "../assets/av3.jpg";
import av4 from "../assets/av4.jpg";
import av5 from "../assets/av5.jpg";
import { AppContext } from "./AppContext";

function TitleRow() {
  const [state, dispatch] = React.useContext(AppContext);
  const { projects } = state;

  const activeProject = projects.filter((i) => i.active);

  return (
    <section className="title-row">
      <div className="projec-title-col">
        <h1>{activeProject[0].title}</h1>
        <img className="title-icon" src={Pencil} alt="Edit" />
        <img className="title-icon" src={Link} alt="Link" />
      </div>
      <div className="invite-col">
        <PopupMenu
          trigger={
            <span className="invite-link">
              <img src={Add} alt="Invite" />
              Invite
            </span>
          }
        />
        <div className="avtars-col">
          <img className="avtar" src={av2} alt="User Name" />
          <img className="avtar" src={av3} alt="User Name" />
          <img className="avtar" src={av4} alt="User Name" />
          <img className="avtar" src={av5} alt="User Name" />
          <span className="avtar-number">+2</span>
        </div>
      </div>
    </section>
  );
}

export default TitleRow;
