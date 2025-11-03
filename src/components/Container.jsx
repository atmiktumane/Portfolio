import React from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export const Container = () => {
  return (
    <section className="w-full h-svh grid grid-cols-1 xl:flex gap-3 md:gap-6 text-zinc-200">
      <Sidebar />

      <MainContent />
    </section>
  );
};
