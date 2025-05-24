import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import Projects from "./Projects";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="mx-4 sm:mx-10 md:mx-28">
        <div
          className="my-12  flex flex-col  sm:my-12 md:my-25 
         md:flex-row items-center md:items-start gap-6 md:gap-10 w-full"
        >
          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-medium sm:text-3xl sm:font-semibold md:text-5xl md:font-extrabold">
              Vadakattu Venkata Sravan
            </h1>
            <h2 className="text-xl font-normal sm:text-2xl sm:font-medium md:text-3xl md:font-semibold">
              React Developer ✨
            </h2>
          </div>
          <img
            src="/images/DSC09681-01.jpg"
            alt="Profile Image"
            className="w-40 h-40 mt-4 rounded-full object-cover mx-auto md:-mt-10"
          />
        </div>
        <div className="max-w-3xl  space-y-3 prose">
          <p>Hey, I'm Sravan! 👋</p>
          <p>
            Front-End & Java Developer with 3 years of experience building
            responsive web applications using React.js and Tailwind CSS. Proven
            ability to implement interactive user interfaces and optimize user
            experience. Proficient in JavaScript and UI validations, with
            hands-on backend experience in Java API development and Oracle SQL
            for efficient data handling. Looking to leverage a strong front-end
            skill set and backend knowledge to contribute to cutting-edge web
            solutions in a collaborative environment.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="http://linkedin.com/in/vvenkatasravan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-500" />
            </a>
            <a
              href="mailto:vvsravan0331@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdContactMail className="text-2xl text-blue-700 hover:text-blue-500" />
            </a>
            <a
              href="https://github.com/sravanvv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-blue-700 hover:text-blue-500" />
            </a>
          </div>
        </div>
        <h2 className="text-2xl font-semibold sm:text-3xl sm:font-semibold md:text-4xl md:font-bold mt-20 -mb-20">
          Projects
        </h2>
      </div>
      <Projects />
    </>
  );
};

export default Home;
