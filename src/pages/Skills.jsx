import React from "react";
import { Skillbar } from "../components";

export const Skills = () => {
  return (
    <div className="h-[100%] px-4 md:px-9 py-20">
      {/* Heading */}
      <h2 className="text-2xl font-medium text-purple-300 tracking-[1px]">
        Skills
      </h2>

      {/* Border line */}
      <div className="mt-3 w-8 h-[3px] bg-purple-500 rounded-2xl"></div>

      {/* Button - Resume */}
      <button className="mt-9 bg-purple-700 hover:bg-purple-900 px-3 py-1 rounded-xl">
        <a href="https://drive.google.com/file/d/1A-4H8Yx2Ot2Lb6lLL2Hh_pwkGSyr-Bn1/view?usp=sharing">
          Resume Link
        </a>
      </button>

      {/* Skill Icons */}
      <div className="mt-9 bg-zinc-900 rounded-xl p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/html.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/css.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/javascript.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/react.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/tailwindcss.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/bootstrap.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/nodejs.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/mysql.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/mongodb.png" alt="/" className="h-20" />
        </div>
        <div className="bg-zinc-800 rounded-3xl flex items-center justify-center p-1">
          <img src="/github.png" alt="/" className="h-20" />
        </div>
        {/* <img src="/css.png" alt="/" className="h-20 m-1" />
        <img src="/javascript.png" alt="/" className="h-20 m-1" />
        <img src="/react.png" alt="/" className="h-20 m-1" />
        <img src="/tailwindcss.png" alt="/" className="h-20 m-1" />
        <img src="/bootstrap.png" alt="/" className="h-20 m-1" />
        <img src="/nodejs.png" alt="/" className="h-20 m-1" />
        <img src="/mysql.png" alt="/" className="h-20 m-1" />
        <img src="/mongodb.png" alt="/" className="h-20 m-1" />
        <img src="/github.png" alt="/" className="h-20 m-1" /> */}
      </div>

      {/* My Skills */}
      <h4 className="mt-9 text-xl text-zinc-300">My Skills</h4>

      {/* Skills Bar section */}
      <div className="mt-4 bg-zinc-900 rounded-xl p-8">
        {/* Skill 1 */}
        <div className="skill-1">
          <Skillbar skill="Frontend Development" level={75} />
        </div>

        {/* Skill 2 */}
        <div className="skill-2 mt-8">
          <Skillbar skill="Backend Development" level={65} />
        </div>

        {/* Skill 3 */}
        <div className="skill-3 mt-8">
          <Skillbar skill="Web Design" level={80} />
        </div>

        {/* Skill 4 */}
        <div className="skill-4 mt-8">
          <Skillbar skill="Problem Solving" level={70} />
        </div>
      </div>
    </div>
  );
};
