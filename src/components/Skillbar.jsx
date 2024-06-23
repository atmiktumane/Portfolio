import React from "react";

export const Skillbar = ({ skill, level }) => {
  return (
    <div className="skillbar">
      {/* Skill Heading with Percentage */}
      <p className="text-zinc-400">
        {skill} <span className="text-purple-400 ml-3">{level}%</span>
      </p>
      {/* bar */}
      <div className="mt-3 w-full bg-zinc-800 rounded-full h-3">
        <div
          className="bg-purple-700 h-3 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};
