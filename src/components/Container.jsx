import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Container = () => {
  return (
    <section className="w-full h-[100%] flex gap-6">
      <Sidebar />

      <MainContent />
    </section>
  );
};

export default Container;
