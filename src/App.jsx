import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TitleRow from "./components/TitleRow";
import FilterRow from "./components/FilterRow";
import TaskRow from "./components/TaskRow";
import { AppContext } from "./components/AppContext";
import { TOGGLE_SIDEBAR } from "./components/ActionType";

const App = () => {
  const [state, dispatch] = React.useContext(AppContext);
  const { sidebarClose } = state;

  React.useState(() => {
    if (window.innerWidth < 1024) {
      dispatch({ type: TOGGLE_SIDEBAR, payload: sidebarClose });
    }
  }, []);

  return (
    <div className={`app ${sidebarClose ? "close-sidebar" : ""}`}>
      <Sidebar />
      <section className="main-section">
        <Header />
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
