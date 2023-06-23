import React from "react";
import PopupMenu from "./PopupMenu";
import "./Sidebar.scss";
import Logo from "../assets/logo.svg";
import ArrowLeft from "../assets/arrowLeft.svg";
import { AddSquare, LampOn } from "iconsax-react";
import { AppContext } from "./AppContext";
import { TOGGLE_SIDEBAR } from "./ActionType";

const Sidebar = () => {
  const [state, dispatch] = React.useContext(AppContext);
  const { menu, projects, sidebarClose } = state;
  return (
    <aside className="sidebar">
      <section className="logo-section">
        <div className="logo">
          <img src={Logo} alt="Project M." />
          Project M.
        </div>
        <div
          className="arrow-left"
          onClick={() => {
            dispatch({ type: TOGGLE_SIDEBAR, payload: sidebarClose });
          }}
        >
          <img src={ArrowLeft} alt="Arrow Left" />
        </div>
      </section>
      <nav className="sb-menu-section">
        {menu.map((i) => {
          return (
            <a key={i.id} className="menu-item" title={i.title}>
              <i.icon size="24" color="#787486" /> {i.title}
            </a>
          );
        })}
      </nav>
      <section className="project-section">
        <div className="section-title">
          my projects
          <PopupMenu trigger={<AddSquare size="14" color="#787486" />} />
        </div>
      </section>
      <section className="project-list-section">
        {projects.map((i) => {
          return (
            <a
              key={i.id}
              className={`porject-item ${i.active ? "active" : ""} ${i.color}`}
              title={i.title}
            >
              {i.title}
              <PopupMenu trigger={<span className="more-dot">. . .</span>} />
            </a>
          );
        })}
      </section>
      <section className="thought-section">
        <div className="lamp">
          <LampOn size="32" color="#fbcb18" />
        </div>
        <div className="text500sm">Thoughts Time</div>
        <p className="text400xs">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button className="button1">Write a message</button>
      </section>
    </aside>
  );
};

export default Sidebar;
