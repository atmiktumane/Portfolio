import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="w-3/4 h-[100%] bg-stone-800 rounded-2xl relative">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default MainContent;
