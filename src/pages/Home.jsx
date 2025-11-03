import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCodepen } from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FaConnectdevelop } from "react-icons/fa6";
import { ProfileCard } from "../components";

export const Home = () => {
  return (
    <div className="h-[100%] flex flex-col px-4 md:px-9 py-20">
      {/* Heading */}
      <h2 className="text-2xl font-medium text-purple-300">Profile</h2>

      {/* Border line */}
      <div className="mt-3 w-8 h-[3px] bg-purple-500 rounded-2xl"></div>

      {/* Description */}
      <p className="mt-7 text-zinc-400">
        Hi, I am Atmik Tumane, Software Developer from India, working in Web
        Development and Software Architecture. I enjoy turning complex problems
        into simple, beautiful and intuitive product with detailed
        functionalities.
      </p>

      <p className="mt-4 text-zinc-400">
        My job is to build the website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to the product and make sure that is eye-catching and easy to use.
        My aim is to bring across the thoughts and identity in the most creative
        way.
      </p>

      {/* What I'm Doing */}
      <div className="mt-11 overflow-auto">
        <h6 className="text-xl text-purple-100 font-medium">What I'm Doing</h6>

        {/* Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 - Web Development */}
          <ProfileCard
            Icon={CgWebsite}
            title="Web Development (Full Stack)"
            content="Competent in both front-end and back-end development, capable of
                  managing the entire development process from database design to user
                  interface implementation."
          />

          {/* Card 2 - Problem Solving */}
          <ProfileCard
            Icon={FaCodepen}
            title="Problem Solving"
            content="Proficient in implementing efficient algorithms and data
                structures to solve complex problems."
          />

          {/* Card 3 - Web Design */}
          <ProfileCard
            Icon={PiFigmaLogoDuotone}
            title="Web Design"
            content="Experienced in creating visually appealing, user-friendly, and
                responsive web designs that enhance user experience."
          />

          {/* Card 4 - Backend Development */}
          <ProfileCard
            Icon={FaConnectdevelop}
            title="APIs and Web Services"
            content="Skilled in designing, developing, and consuming RESTful APIs and
                web services, enabling seamless integration and communication
                between distributed systems."
          />
        </div>
      </div>
    </div>
  );
};
