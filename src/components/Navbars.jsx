import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbars = () => {
  // Nav menus
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Experience",
      link: "/experience",
    },
    {
      title: "Education",
      link: "/education",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const location = useLocation();

  // to keep track of current active nav menu
  const [activeLink, setActiveLink] = useState(location.pathname);

  // handle active nav menu
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  //   Render Nav Link
  const renderNavLink = links.map((item, index) => {
    return (
      <li
        key={index}
        // className="bg-zinc-900 rounded-xl px-3 py-1 transition-all duration-500"
        className="bg-zinc-900 rounded-xl px-4 py-1 transition-all duration-500 text-center min-w-[90px]"
      >
        <Link
          to={item.link}
          className={`hover:text-purple-500 ${
            activeLink === item.link ? "text-purple-500" : "text-zinc-200"
          }`}
          onClick={() => handleSetActiveLink(item.link)}
        >
          {item.title}
        </Link>
      </li>
    );
  });
  return (
    <div className="w-full xl:w-3/4 bg-zinc-700 px-3 xl:px-5 py-3 absolute top-0 right-0 rounded-tr-2xl rounded-bl-xl">
      <ul className="grid grid-cols-3 md:grid-cols-6 text-sm md:text-md gap-2 text-white">
        {renderNavLink}
      </ul>
    </div>
  );
};
