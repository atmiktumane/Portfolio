import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { Route, Routes } from "react-router-dom";
import {
  Contact,
  Education,
  Experience,
  Home,
  Projects,
  Skills,
} from "./pages";
import { Container } from "./components";

const App = () => {
  return (
    <MantineProvider>
      <div className="min-h-svh w-full px-2 md:px-14 py-5 md:py-14">
        <Routes>
          {/* Nested Route -> Outlet from react-router-dom */}
          <Route exact path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </MantineProvider>
  );
};

export default App;
