import React from "react";

import {
  Category,
  Message,
  TaskSquare,
  Profile2User,
  Setting2,
  AddSquare,
  LampOn,
} from "iconsax-react";
const Sidebar = () => {
  return (
    <section className="sidebar">
      <nav className="sb-menu-section">
        <div className="menu-item">
          <Category size="24" color="#787486" /> Home
        </div>
        <div className="menu-item">
          <Message size="24" color="#787486" /> Messages
        </div>
        <div className="menu-item">
          <TaskSquare size="24" color="#787486" /> Tasks
        </div>
        <div className="menu-item">
          <Profile2User size="24" color="#787486" /> Members
        </div>
        <div className="menu-item">
          <Setting2 size="24" color="#787486" /> Settings
        </div>
      </nav>
      <section className="project-section">
        <div className="section-title">
          my projects <AddSquare size="14" color="#787486" />
        </div>
      </section>
      <section className="project-list-section">
        <div className="porject-item active">
          Mobile App
          <span className="more-dot">. . .</span>
        </div>
        <div className="porject-item orange">
          Website Redesign
          <span className="more-dot">. . .</span>
        </div>
        <div className="porject-item purple">
          Design System
          <span className="more-dot">. . .</span>
        </div>
        <div className="porject-item blue">
          Wireframes
          <span className="more-dot">. . .</span>
        </div>
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
    </section>
  );
};

export default Sidebar;
