import React from "react";
import { Outlet } from "react-router-dom";
import { Navbars } from "./Navbars";

export const MainContent = () => {
  return (
    <div className="w-full xl:w-3/4 h-[100%] bg-zinc-800 rounded-2xl relative">
      <Navbars />

      <Outlet />
    </div>
  );
};
