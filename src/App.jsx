import React from "react";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-900 px-2 md:px-14 py-5 md:py-14">
      <Routes>
        {/* Nested Route -> Outlet from react-router-dom */}
        <Route exact path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
