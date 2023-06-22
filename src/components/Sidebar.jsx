import "./Sidebar.scss";
import Logo from "../assets/logo.svg";
import ArrowLeft from "../assets/arrowLeft.svg";
import {
  Category,
  Message,
  TaskSquare,
  Profile2User,
  Setting2,
  AddSquare,
  LampOn,
} from "iconsax-react";
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
        <a className="menu-item">
          <Category size="24" color="#787486" /> Home
        </a>
        <a className="menu-item">
          <Message size="24" color="#787486" /> Messages
        </a>
        <a className="menu-item">
          <TaskSquare size="24" color="#787486" /> Tasks
        </a>
        <a className="menu-item">
          <Profile2User size="24" color="#787486" /> Members
        </a>
        <a className="menu-item">
          <Setting2 size="24" color="#787486" /> Settings
        </a>
      </nav>
      <section className="project-section">
        <div className="section-title">
          my projects <AddSquare size="14" color="#787486" />
        </div>
      </section>
      <section className="project-list-section">
        <a className="porject-item active">
          Mobile App
          <span className="more-dot">. . .</span>
        </a>
        <a className="porject-item orange">
          Website Redesign
          <span className="more-dot">. . .</span>
        </a>
        <a className="porject-item purple">
          Design System
          <span className="more-dot">. . .</span>
        </a>
        <a className="porject-item blue">
          Wireframes
          <span className="more-dot">. . .</span>
        </a>
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
