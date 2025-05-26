import { FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { MdContactMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-24 w-full">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center mt-10 mb-10">
        <a
          href="mailto:vvsravan0331@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-[#17c3b2] text-white rounded-md px-4 py-1 flex items-center justify-center 
          border-4 border-transparent hover:bg-white hover:text-[#17c3b2] hover:border-[#17c3b2] 
          transition duration-500"
            href="mailto:vvsravan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-md font-medium"> Send me an Email</span>
            <LuMail className="ml-3 text-2xl text-blue-700 hover:text-blue-500" />
          </button>
        </a>
        <p className="text-md font-medium">or</p>
        <a
          href="http://linkedin.com/in/vvenkatasravan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-[#17c3b2] text-white rounded-md px-4 py-1 flex items-center justify-center 
          border-4 border-transparent hover:bg-white hover:text-[#17c3b2] hover:border-[#17c3b2] 
          transition duration-500"
          >
            <span className="text-md font-medium"> DM me on Linkedin</span>
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-500 ml-2" />
          </button>
        </a>
      </div>
      <div
        className="py-4 border-t border-neutral-500 flex flex-col md:flex-row justify-between
       gap-5 mt-16 md:ml-42 md:mr-42"
      >
        <nav
          className="flex flex-col items-start  md:flex-row md:justify-start space-x-6 
      color-white text-medium font-normal"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Experience">Experience</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </nav>
        <div className="flex md:justify-end space-x-4">
          <a
            href="http://linkedin.com/in/vvenkatasravan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-white hover:text-blue-500" />
          </a>
          <a
            href="mailto:vvsravan0331@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdContactMail className="text-2xl text-white hover:text-blue-500" />
          </a>
          <a
            href="https://github.com/sravanvv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-white hover:text-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
