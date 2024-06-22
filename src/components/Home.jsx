import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCodepen } from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FaConnectdevelop } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="h-[100%] px-4 md:px-9 py-20">
      {/* Heading */}
      <h2 className="text-2xl font-medium text-purple-300">Portfolio</h2>

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
      <div className="mt-11">
        <h6 className="text-xl text-purple-100 font-medium">What I'm Doing</h6>

        {/* Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 - Web Development */}
          <div className="bg-zinc-900 px-4 py-6 flex rounded-lg gap-3 hover:shadow-lg hover:shadow-purple-500/20">
            {/* Icon */}
            <div>
              <CgWebsite className="text-5xl text-purple-500" />
            </div>

            {/* Content */}
            <div className="content">
              <p className="text-lg">Web Development (Full Stack)</p>
              <p className="mt-2 text-zinc-400">
                Competent in both front-end and back-end development, capable of
                managing the entire development process from database design to
                user interface implementation.
              </p>
            </div>
          </div>

          {/* Card 2 - Problem Solving */}
          <div className="bg-zinc-900 px-4 py-6 flex rounded-lg gap-3 hover:shadow-lg hover:shadow-purple-500/20">
            {/* Icon */}
            <div>
              <FaCodepen className="text-5xl text-purple-500" />
            </div>

            {/* Content */}
            <div className="content">
              <p className="text-lg">Problem Solving</p>
              <p className="mt-2 text-zinc-400">
                Proficient in implementing efficient algorithms and data
                structures to solve complex problems.
              </p>
            </div>
          </div>

          {/* Card 3 - Web Design */}
          <div className="bg-zinc-900 px-4 py-6 flex rounded-lg gap-3 hover:shadow-lg hover:shadow-purple-500/20">
            {/* Icon */}
            <div>
              <PiFigmaLogoDuotone className="text-5xl text-purple-500" />
            </div>

            {/* Content */}
            <div className="content">
              <p className="text-lg">Web Design</p>
              <p className="mt-2 text-zinc-400">
                Experienced in creating visually appealing, user-friendly, and
                responsive web designs that enhance user experience.
              </p>
            </div>
          </div>

          {/* Card 4 - Backend Development */}
          <div className="bg-zinc-900 px-4 py-6 flex rounded-lg gap-3 hover:shadow-lg hover:shadow-purple-500/20">
            {/* Icon */}
            <div>
              <FaConnectdevelop className="text-5xl text-purple-500" />
            </div>

            {/* Content */}
            <div className="content">
              <p className="text-lg">APIs and Web Services</p>
              <p className="mt-2 text-zinc-400">
                Skilled in designing, developing, and consuming RESTful APIs and
                web services, enabling seamless integration and communication
                between different systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
