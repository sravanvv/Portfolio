import { FaGithub } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel.jsx";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const VmartPro = () => {
  return (
    <>
      <div className="mx-6 sm:mx-10 lg:mx-64 lg:max-w-4xl lg:mx-auto">
        <h2 className="mt-12 text-3xl font-bold">
          V Mart – Discount Product Showcase
        </h2>
        <div className="mr-2 flex justify-end items-center lg:mr-10">
          <a href="https://v-mart-website.vercel.app/"   target="_blank"
          rel="noopener noreferrer">
            <button
              className="gap-2 mt-4 lg:mt-0 bg-[#17c3b2] text-white rounded-md px-4 py-1 flex items-center justify-center 
          border-4 border-transparent hover:bg-white hover:text-[#17c3b2] hover:border-[#17c3b2] 
          transition duration-500"
            >
              Live Demo
              <span>
                <FaArrowUpRightFromSquare />
              </span>
            </button>
          </a>
        </div>
        <ImageCarousel />

        <ul className="mt-4 text-sm flex flex-wrap gap-4">
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            React
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            JavaScript
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            Tailwind CSS
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            React Router
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            Git
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            Vercel
          </li>
        </ul>
        <p className="my-4 text-justify">
          Responsive React app for Vmart that displays discounted products using
          real-time data from Google Sheets. Product details are maintained in a
          CSV file, parsed dynamically in the frontend, and updated live without
          redeployment. The UI is styled using Tailwind CSS, ensuring a sleek
          and responsive user experience.
        </p>
        <p className="mt-2 font-medium text-justify">Key Features:</p>
        <ul className="text-justify list-disc pl-5 space-y-2 mt-2">
          <li>
            <span className="font-medium">Live Product Updates </span>Product
            information is sourced from a CSV file and parsed in real-time. Any
            updates reflect instantly on the UI without the need for
            redeployment.
          </li>
          <li>
            <span className="font-medium">Google Maps Integration </span>
            Embedded Google Maps to display store locations, enhancing user
            navigation and accessibility.
          </li>
          <li>
            <span className="font-medium">Responsive Design </span>Built with
            Tailwind CSS for a seamless, mobile-first experience across all
            device sizes.
          </li>
          <li>
            <span className="font-medium">Optimized Performance </span>Clean,
            efficient codebase with lazy loading for improved performance and
            user experience.
          </li>
          <li>
            Integrated React Router for smooth navigation between pages like
            Home, Products, and Contact.
          </li>
        </ul>
              <div className="flex flex-col justify-center items-center gap-10">
          <a
            href="https://github.com/sravanvv/VMart-Website"
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
export default VmartPro;
