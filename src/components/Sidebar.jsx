import PopupMenu from "./PopupMenu";
import { ProjectM } from "../data";
import "./Sidebar.scss";
import Logo from "../assets/logo.svg";
import ArrowLeft from "../assets/arrowLeft.svg";
import { AddSquare, LampOn } from "iconsax-react";
const Sidebar = ({ handleSidebar }) => {
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
            handleSidebar();
          }}
        >
          <img src={ArrowLeft} alt="Arrow Left" />
        </div>
      </section>
      <nav className="sb-menu-section">
        {ProjectM.menu.map((i) => {
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
        {ProjectM.projects.map((i) => {
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
