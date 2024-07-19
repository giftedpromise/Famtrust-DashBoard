import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default App;
