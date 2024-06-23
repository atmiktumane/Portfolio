import React from "react";

export const ProfileCard = ({ Icon, title, content }) => {
  return (
    <div className="bg-zinc-900 px-4 py-6 flex rounded-lg gap-3 hover:shadow-lg hover:shadow-purple-500/20">
      {/* Icon */}
      <div>
        <Icon className="text-5xl text-purple-500" />
      </div>

      {/* Content */}
      <div className="content">
        <p className="text-lg">{title}</p>
        <p className="mt-2 text-zinc-400">{content}</p>
      </div>
    </div>
  );
};
