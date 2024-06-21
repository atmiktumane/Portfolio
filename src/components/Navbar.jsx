import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // to keep track of current active nav menu
  const [activeLink, setActiveLink] = useState("Home");

  // handle active nav menu
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Resume",
      link: "/resume",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  //   Render Nav Link
  const renderNavLink = links.map((item, index) => {
    return (
      <li
        key={index}
        className="bg-zinc-900 rounded-xl px-3 py-1 transition-all duration-500"
      >
        <Link
          to={item.link}
          className={`hover:text-purple-500 ${
            activeLink === item.title ? "text-purple-500" : "text-zinc-200"
          }`}
          onClick={() => handleSetActiveLink(item.title)}
        >
          {item.title}
        </Link>
      </li>
    );
  });
  return (
    <div className="w-full xl:w-1/2 bg-zinc-700 px-16 xl:px-5 py-3 absolute top-0 right-0 rounded-tr-2xl rounded-bl-xl">
      <ul className="text-white flex justify-between">{renderNavLink}</ul>
    </div>
  );
};

export default Navbar;
