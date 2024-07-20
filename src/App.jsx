import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div
        className="flex-col h-screen w-[100%] overflow-auto"
        style={{
          backgroundColor:
            "var(--Color-Style-Primary-Roles-Pri-container, #E2DDFF)",
        }}
      >
        <NavBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
