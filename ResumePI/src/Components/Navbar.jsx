import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div
      //   className="bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 transition-all duration-300
      // ease-in-out sticky top-0 z-50"
      className="bg-[#17c3b2]  sticky top-0 z-50"
    >
      <div className="sm:container mx-auto flex justify-between items-center p-2">
        <nav className="hidden sm:flex m-auto items-center space-x-10 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Experience"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
            }
          >
            Projects
          </NavLink>
          {/* <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
            }
          >
            Contact
          </NavLink> */}

          <a
            href="/Venkata_Sravan_React_Java_Developer.pdf"
            download="Venkata_Sravan_React_Java_Developer.pdf"
            className="relative inline-block px-4 py-1 border-2 border-black text-black font-semibold rounded-md 
             transition-all duration-300 ease-in-out
             hover:text-white hover:bg-black hover:-translate-x-1 hover:-translate-y-1 
             hover:shadow-[3px_3px_0px_0px_white,6px_6px_0px_0px_black]"
          >
            Resume
          </a>
        </nav>
      </div>
      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-between w-full p-2">
        <h1 className="text-2xl font-bold text-zinc-100 font-serif">Sravan</h1>
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden container mx-auto flex justify-between items-center">
          <nav
            className="flex space-x-1 m-auto flex-col justify-between items-center space-x-1 
color-white text-lg font-semibold"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Experience"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
              }
            >
              Projects
            </NavLink>
            {/* <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-700 hover:text-white"}`
              }
            >
              Contact
            </NavLink> */}

            <a
              href="/Venkata_Sravan_React_Java_Developer.pdf"
              download="Venkata_Sravan_React_Java_Developer.pdf"
              className="relative inline-block px-2 py-1 mb-2 mt-1 border-2 border-black text-black font-semibold rounded-md 
             transition-all duration-300 ease-in-out
             hover:text-white hover:bg-black hover:-translate-x-1 hover:-translate-y-1 
             hover:shadow-[3px_3px_0px_0px_white,6px_6px_0px_0px_black]"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Navbar;
