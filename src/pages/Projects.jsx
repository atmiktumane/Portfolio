import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaCheck } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import { useState } from "react";
import CarMarketApp from "../assets/CarMarketApp.png";
import JobKonnect from "../assets/JobKonnect.png";
import Portfolio from "../assets/Portfolio.png";
import projectImg from "../assets/projectImg.jpg";
import DroidChat from "../assets/DroidChat.png";

const projectsData = [
  {
    name: "Droid Chat.AI",
    image: DroidChat,
    description:
      "AI-powered conversational platform designed to provide fast, accurate, and human-like responses for real-time interactions.",
    detailPoints: [
      "Built an Intelligent AI Assistant integrating OpenAI & Google Gemini APIs for real-time conversations, with a React UI supporting dynamic chat, typing indicators, and seamless interactions.",
      "Developed a scalable backend for chat storage, API orchestration, and optimized request processing, ensuring low latency and efficient session management.",
    ],
    techStack:
      "Java Spring Boot | Open AI | Google Gemini API | React | Redux | TailwindCSS | Mantine UI ",
    githubLink: "https://github.com/atmiktumane/DroidChat-Frontend",
    liveLink: "https://droid-chat.netlify.app/",
  },
  {
    name: "Car Selling Platform",
    image: CarMarketApp,
    description:
      "A full-featured online car selling platform with real-time car listing management, payment integration, and admin dashboard.",
    detailPoints: [
      "Built a full-stack web application for buying and selling cars with CRUD operations for car listings (create, update, delete, view).",
      "Implemented user authentication and authorization using Spring Security, supporting secure login/signup flows.",
      "Developed OTP-based password reset system with email integration to enhance account security.",
    ],
    techStack:
      "Java Springboot | React JS | Spring Security | Typescript | MongoDB | Tailwind CSS | Mantine UI",
    githubLink: "https://github.com/atmiktumane/CarMarket-backend",
    liveLink: "https://at-car-market.netlify.app/",
  },

  {
    name: "JobKonnect",
    image: JobKonnect,
    description:
      "JobKonnect is an online job portal that connects recruiters and job seekers, allowing employers to post job openings and candidates to apply, manage profiles, and track application statuses seamlessly.",
    detailPoints: [
      "Developed a full-stack job portal connecting recruiters and candidates using React, Redux, Java, and Spring Boot.",
      "Implemented JWT-based authentication and role-based access control with Spring Security.",
      "Designed and integrated RESTful APIs for job management, improving performance and scalability.",
    ],
    techStack:
      "Java Springboot | React JS | Spring Security | Typescript | MongoDB | JSON Web Tokens (JWT)",
    githubLink: "https://github.com/atmiktumane/backend_JobKonnect",
    liveLink: "https://job-konnect.vercel.app/",
  },

  {
    name: "BookMart",
    image: projectImg,
    description:
      "An online book store application with secure authentication, state management, and dynamic routing.",
    detailPoints: [
      "Developed a full-stack MERN bookstore application with secure JWT-based authentication, enabling users to browse, search, and manage books seamlessly.",
      "Implemented CRUD operations for book management and integrated Redux for efficient global state handling and data synchronization across components.",
      "Designed a responsive and optimized frontend using React, Tailwind CSS, and Vite, ensuring fast load times and smooth user experience with dynamic routing via React Router DOM.",
    ],
    techStack:
      "React | Redux | React Router DOM | Node.js | Express.js | MongoDB | JSON Web Tokens (JWT)",
    githubLink: "https://github.com/atmiktumane/BookMart",
    liveLink: "",
  },

  {
    name: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and experience, designed to highlight professional achievements and provide an easy way for recruiters and collaborators to connect.",
    detailPoints: [
      "Built a responsive and visually appealing portfolio with smooth navigation and modern UI design.",
      "Structured multi-page navigation using React Router DOM to display projects, skills, and experience effectively.",
      "Integrated contact form using Web3Forms for seamless message handling without backend setup.",
    ],
    techStack: "React | React Router | Vite | Tailwind CSS | Web3Form",
    githubLink: "https://github.com/atmiktumane/Portfolio",
    liveLink: "https://portfolio-atmiktumane.netlify.app/",
  },
];

export const Projects = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    detailPoints: [""],
    techStack: [""],
    githubLink: "",
    liveLink: "",
  });

  //   console.log(projectDetails);

  return (
    <>
      <div className="h-[100%] px-4 md:px-9 pt-32 md:pt-20 pb-20 overflow-auto">
        {/* Heading */}
        <h2 className="text-2xl font-medium text-purple-300">
          Featured Projects
        </h2>

        {/* Border line */}
        <div className="mt-3 mb-7 w-8 h-[3px] bg-purple-500 rounded-2xl"></div>

        <p className="text-sm text-purple-300">
          Here are some of my projects that showcase my skills and passion for
          development
        </p>

        {/* Cards - Projects */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectsData.map((project, index) => {
            return (
              // Project 1
              <div key={index} className="h-[300px] bg-zinc-900 rounded-lg">
                {/* image */}
                <img
                  src={project.image}
                  alt="projectImg"
                  className="w-full h-[100px] rounded-t-lg"
                />

                {/* Details */}
                <div className="p-3 h-[200px] flex flex-col justify-between">
                  {/* Content */}
                  <div className="flex flex-col items-center gap-3">
                    <p className="font-semibold text-purple-200">
                      {project.name}
                    </p>
                    <p className="text-xs text-center">{project.description}</p>
                  </div>

                  <Button
                    variant="filled"
                    color="violet"
                    fullWidth
                    onClick={() => {
                      open();
                      setProjectDetails(project);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title={projectDetails.name}
        centered
        classNames={{
          header: "bg-zinc-800 text-purple-400",
          content: "bg-zinc-800 text-zinc-300",
        }}
      >
        {/* Modal content */}
        {/* Description */}
        <div className="text-sm mb-3">{projectDetails.description}</div>

        {/* Project Details Points */}
        <div className="flex flex-col gap-2 text-xs">
          {projectDetails.detailPoints.map((item, index) => {
            return (
              <div key={index} className="flex items-start gap-2">
                <FaCheck className="flex-shrink-0 text-xs text-lg text-purple-500 mt-[2px]" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <p className="m-3 text-sm text-purple-300">
          <span className="font-semibold">Tech Stack</span> :{" "}
          {projectDetails.techStack}
        </p>

        {/* Buttons - Github Link + Live Link */}
        <div className="flex gap-3">
          {/* Github Link */}
          <a href={projectDetails.githubLink} className="w-1/2">
            <Button
              leftSection={<IoLogoGithub size={14} />}
              color="violet"
              fullWidth
            >
              Code
            </Button>
          </a>

          {/* Live Link */}
          <a href={projectDetails.liveLink} className="w-1/2">
            <Button
              leftSection={<RiExternalLinkLine size={14} />}
              color="violet"
              fullWidth
            >
              Live Link
            </Button>
          </a>
        </div>
      </Modal>
    </>
  );
};
