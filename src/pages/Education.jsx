import { CiCalendar } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";
import iiitLogo from "../assets/iiitLogo.png";
import { FaUniversity } from "react-icons/fa";

export const Education = () => {
  return (
    <div className="h-[100%] px-4 md:px-9 pt-32 md:pt-20 pb-20">
      {/* Heading */}
      <h2 className="text-2xl font-medium text-purple-300">
        Academic Background
      </h2>

      {/* Border line */}
      <div className="mt-3 mb-7 w-8 h-[3px] bg-purple-500 rounded-2xl"></div>

      {/* Cards - Education */}
      <div className="flex flex-col gap-6">
        {/* IIIT Nagpur */}
        <div className="w-full bg-zinc-900 px-4 py-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <img src={iiitLogo} alt="prodtLogo" className="h-8 w-8" />

            {/* Content */}
            <div className="flex flex-col gap-2">
              <p className="text-md">
                Bachelor of Technology in Computer Science
              </p>
              <p className="text-purple-300">
                Indian Institute of Information Technology, Nagpur
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 text-zinc-400 text-xl">
                  <CiCalendar /> <span className="!text-sm">2019 - 2023</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-400 text-md">
                  <SlLocationPin />{" "}
                  <span className="!text-sm">Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-1">
            <div className="flex items-center gap-1 text-sm">
              {" "}
              <TbPointFilled /> Object Oriented Programming (OOPs).
            </div>
            <div className="flex items-center gap-1 text-sm">
              {" "}
              <TbPointFilled /> Database Management System (DBMS).
            </div>
            <div className="flex items-center gap-1 text-sm">
              {" "}
              <TbPointFilled /> Software Architecture & System Design.
            </div>
            <div className="flex items-center gap-1 text-sm">
              {" "}
              <TbPointFilled /> Operating System.
            </div>
          </div>
        </div>

        {/* P.C College */}
        <div className="w-full bg-zinc-900 px-4 py-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="text-3xl text-purple-300">
              <FaUniversity />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <p className="text-md">
                Higher Secondary Education (11th + 12th)
              </p>
              <p className="text-purple-300">P.C College</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 text-zinc-400 text-xl">
                  <CiCalendar /> <span className="!text-sm">2017 - 2019</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-400 text-md">
                  <SlLocationPin />{" "}
                  <span className="!text-sm">Nagpur, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-1">
            <div className="flex items-center gap-1 text-sm">
              {" "}
              <TbPointFilled /> Studied Physics, Chemistry, Maths.
            </div>
            <div className="flex items-center gap-1 text-sm">
              {" "}
              <TbPointFilled /> Rank holder in JEE Competitive Exam.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
