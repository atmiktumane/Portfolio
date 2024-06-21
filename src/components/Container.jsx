import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Container = () => {
  return (
    <section className="w-full h-[100%] grid grid-cols-1 xl:flex gap-3 md:gap-6 text-zinc-200">
      <Sidebar />

      <MainContent />
    </section>
  );
};

export default Container;
