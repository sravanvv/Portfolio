import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Productpro = () => {
  return (
    <>
      <div className="mx-6 sm:mx-10 lg:mx-64 lg:max-w-4xl lg:mx-auto">
        <h2 className="mt-12 text-3xl font-bold">
          Products Dashboard – Inventory Management App
        </h2>
        <div className="mr-2 flex justify-end items-center lg:mr-10">
          <a
            href="https://textutils-textformatter.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <button
              className="gap-2 mt-4 lg:mt-0 bg-[#17c3b2] text-white rounded-md px-4 py-1 flex items-center justify-center 
          border-4 border-transparent hover:bg-white hover:text-[#17c3b2] hover:border-[#17c3b2] 
          transition duration-500"
            >
              Live Demo
              <span>
                <FaArrowUpRightFromSquare />
              </span>
            </button> */}
          </a>
        </div>
        <div className="mt-6 mb-6 relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-xl">
          <img
            src="/Images/product.png"
            alt="Utils"
            className="w-full h-full sm:h-80 object-contain transition duration-500 ease-in-out bg-white p-2
            border-2 rounded-2xl border-[#17c3b2] rounded-lg hover:scale-105"
          />
        </div>

        <ul className="mt-4 text-sm flex flex-wrap gap-4">
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            React
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            JavaScript
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            Node.js
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            Express
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            MongoDB
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            CRUD API's
          </li>
        </ul>
        <p className="my-4 text-justify">
          A full-stack application developed using React, Node.js, Express, and
          MongoDB to manage and display a product catalog in a dashboard format.
          The app supports real-time CRUD operations for seamless product
          management. Backend APIs are built with Express and MongoDB using
          Mongoose for data modeling. The UI is styled with Tailwind CSS to
          ensure responsiveness and clean layout across devices. Focused on
          modular code structure and efficient RESTful integrations.
        </p>
        <p className="mt-2 font-medium text-justify">Key Features:</p>
        <ul className="text-justify list-disc pl-5 space-y-2 mt-2">
          <li>
            <span className="font-medium">MERN Stack Architecture: </span>Built
            with React for the frontend, Express and Node.js for the backend,
            and MongoDB as the database.
          </li>
          <li>
            <span className="font-medium">Product Management: </span>
            Allows adding, editing, viewing, and deleting product entries with
            form validations and responsive UI.
          </li>
          <li>
            <span className="font-medium"> MongoDB Integration: </span>Uses
            Mongoose to define product schemas and handle database interactions
            efficiently.
          </li>
          <li>
            <span className="font-medium">Tailwind CSS Styling: </span>Clean,
            responsive layout with consistent design for desktop and mobile.
          </li>
          <li>
            <span className="font-medium">Modular Codebase: </span>Organized
            React components and RESTful API structure make the app scalable and
            easy to maintain.
          </li>
        </ul>
              <div className="flex flex-col justify-center items-center gap-10">
          <a
            href="https://github.com/sravanvv/Mini-Grocery-Site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-10 bg-[#17c3b2] text-white rounded-md px-4 py-1 flex items-center 
            justify-center border-4 border-transparent hover:bg-white hover:text-[#17c3b2] 
             hover:border-[#17c3b2] transition duration-500"
            >
              <span className="mr-2">
                <FaGithub className="text-2xl text-black hover:text-blue-500" />{" "}
              </span>
              GitHub Repository
              <span>
                <FaArrowUpRightFromSquare className="ml-2" />
              </span>
            </button>
          </a>
          <a href="/Projects">
            <button
              className="bg-[#17c3b2] text-white rounded-md px-4 py-1 flex items-center 
            justify-center border-4 border-transparent hover:bg-white hover:text-[#17c3b2] 
             hover:border-[#17c3b2] transition duration-500"
            >
              See all Projects
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Productpro;
