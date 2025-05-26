import React from "react";
import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <div className="mx-4 sm:mx-10 md:mx-28">
        <div
          className="my-12 flex flex-col sm:my-12 md:my-20 
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
            src="/Images/DSC09681-01.jpg"
            alt="Profile Image"
            className="w-40 h-40 mt-4 rounded-full object-cover mx-auto md:-mt-10"
          />
        </div>

        <div className="max-w-3xl space-y-2 prose text-justify text-lg">
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

        <h2
          className="text-2xl mt-14 font-medium sm:text-3xl sm:font-semibold md:text-4xl md:font-semibold
         sm:-mb-20"
        >
          Projects
        </h2>
      </div>

      <Projects />

      <div className="mx-4 sm:mx-10 md:mx-28">
        <h2 className="text-2xl font-medium sm:text-3xl sm:font-semibold md:text-4xl md:font-semibold mt-14 mb-8">
          Skills
        </h2>
        <div className="flex gap-6 ml-12">
          <FaReact
            className="text-4xl text-blue-700 transition-colors duration-500 
          hover:text-[#17c3b2] hover:animate-spin"
          />
          <RiTailwindCssFill className="text-4xl text-blue-700 hover:text-[#17c3b2]" />
          <SiJavascript className="text-4xl text-yellow-500 duration-500 hover:text-[#17c3b2]" />
        </div>
      </div>

      <div className="mx-4 sm:mx-10 md:mx-28 ">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-2xl font-medium sm:text-3xl sm:font-semibold md:text-4xl md:font-semibold mt-14 mb-8">
            Experience
          </h2>
          {/* Experience Block 1 */}
          <div className="text-lg">
            <div className="flex flex-col sm:flex-row gap-8">
              <p className="text-sm sm:w-3/12 sm:text-right pt-1.5">
                June 2022 - Present
              </p>
              <div className="flex flex-col sm:w-9/12">
                <p className="font-semibold">
                  Software Developer at Equitas Small Finance Bank
                </p>
                <p className="mt-2 text-sm text-justify">
                  Equitas Small Finance Bank (erstwhile Equitas Microfinance
                  Ltd) is a small finance bank founded in 2016 as a microfinance
                  lender. The Bank has its headquarters in Chennai.
                </p>
              </div>
            </div>
          </div>
          {/* Experience Block 2 */}
          <div className="mt-6 text-lg">
            <div className="flex flex-col sm:flex-row gap-8">
              <p className="text-sm sm:w-3/12 sm:text-right pt-1.5">
                August 2021 - January 2022
              </p>
              <div className="flex flex-col sm:w-9/12">
                <p className="font-semibold">Product Trainee at HighRadius</p>
                <p className="mt-2 text-sm text-justify ">
                  HighRadius is a financial technology company that uses
                  artificial intelligence to help companies automate accounts
                  receivable and treasury processes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <a href="/Experience">
              <button
                className=" text-md bg-[#17c3b2] text-white py-2 px-6 rounded 
        border-2 border-transparent hover:bg-white hover:text-[#17c3b2] hover:border-[#17c3b2] 
          transition duration-500"
              >
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
