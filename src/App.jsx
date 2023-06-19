import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.scss";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import TitleRow from "./components/TitleRow";
import FilterRow from "./components/FilterRow";
import TaskRow from "./components/TaskRow";
function App() {
  return (
    <>
      <Header />
      <main className="main-section">
        <Sidebar />
        <section className="content-section">
          <TitleRow />
          <FilterRow />
          <TaskRow />
        </section>
      </main>
    </>
  );
}

export default App;
