import React from "react";

import "./App.scss";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import TitleRow from "./components/TitleRow";
import FilterRow from "./components/FilterRow";
import TaskRow from "./components/TaskRow";

const App = () => {
  const [colseSB, setCloseSB] = React.useState(false);
  const handleSidebar = () => {
    setCloseSB(!colseSB);
  };

  React.useState(() => {
    if (window.innerWidth < 1024) {
      setCloseSB(!colseSB);
    }
  }, []);

  return (
    <div className={`app ${colseSB ? "close-sidebar" : ""}`}>
      <Sidebar handleSidebar={handleSidebar} />
      <section className="main-section">
        <Header handleSidebar={handleSidebar} />
        <main className="content-section">
          <TitleRow />
          <FilterRow />
          <TaskRow />
        </main>
      </section>
    </div>
  );
};

export default App;
