import React from "react";
import logo from "../assets/atmikPhoto.jpeg";
import { MdMailOutline } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div className="w-full xl:w-1/4 h-[100%] flex flex-col justify-between items-center px-4 py-8 bg-zinc-800 rounded-2xl">
      {/* Row 1 : Profile Image, Name, Designation */}
      <div className="row-1 flex flex-col items-center space-y-6">
        <img src={logo} alt="/" className="h-32 w-32 rounded-full" />

        <p className="text-2xl font-semibold">Atmik Tumane</p>
        <p className="text-center text-zinc-400">
          Software Developer | MERN | Full Stack Developer
        </p>

        <div className="w-[100%] h-[1px] bg-purple-500 block"></div>
      </div>

      {/* Row 2 : Email, Phone, Location */}
      <div className="row-2 my-6 xl:my-12 space-y-9">
        {/* Email */}
        <div className="flex gap-2">
          <div className="bg-zinc-900 flex justify-center items-center px-3 py-2 rounded-lg">
            <MdMailOutline className="text-2xl text-purple-500" />
          </div>

          <div className="block">
            <p className="text-zinc-400 text-sm font-semibold">EMAIL</p>
            <p>atmiktumane72@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-2">
          <div className="bg-zinc-900 flex justify-center items-center px-3 py-2 rounded-lg">
            <IoIosPhonePortrait className="text-2xl text-purple-500" />
          </div>

          <div className="block">
            <p className="text-zinc-400 text-sm font-semibold">PHONE</p>
            <p>+91-7499272099</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex gap-2">
          <div className="bg-zinc-900 flex justify-center items-center px-3 py-2 rounded-lg">
            <MdOutlineLocationOn className="text-2xl text-purple-500" />
          </div>

          <div className="block">
            <p className="text-zinc-400 text-sm font-semibold">LOCATION</p>
            <p>Maharashtra, India</p>
          </div>
        </div>
      </div>

      {/* Row 3 : Github, LinkedIn */}
      <div className="row-3 w-full grid grid-cols-2 gap-6">
        {/* Github button */}
        <button className="bg-zinc-900 py-2 rounded border border-zinc-900 hover:border-purple-400 transition ease-in-out">
          <a
            href="https://github.com/atmiktumane"
            className="flex items-center justify-center gap-3 text-zinc-400"
          >
            Github <SiGithub />
          </a>
        </button>

        {/* LinkedIn button */}
        <button className="bg-zinc-900 py-2 rounded border border-zinc-900 hover:border-purple-400 transition ease-in-out">
          <a
            href="https://www.linkedin.com/in/atmiktumane/"
            className="flex items-center justify-center gap-3 text-zinc-400"
          >
            LinkedIn <IoLogoLinkedin />
          </a>
        </button>
      </div>
    </div>
  );
};
