import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Utilspro = () => {
  return (
    <>
      <div className="mx-6 sm:mx-10 lg:mx-64 lg:max-w-4xl lg:mx-auto">
        <h2 className="mt-12 text-3xl font-bold">
          TextUtils – Online Text Manipulation Tool
        </h2>
        <div className="mr-2 flex justify-end items-center lg:mr-10">
          <a
            href="https://textutils-textformatter.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        <div className="mt-6 mb-6 relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-xl">
          <img
            src="/Images/textutils.png"
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
            Bootstrap
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            CSS
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            Git
          </li>
          <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
            Vercel
          </li>
        </ul>
        <p className="my-4 text-justify">
          A responsive React web app for analyzing and transforming text in real
          time. Designed with usability in mind, it offers multiple tools to
          enhance, clean, and format text content for developers, writers, and
          students.
        </p>
        <p className="mt-2 font-medium text-justify">Key Features:</p>
        <ul className="text-justify list-disc pl-5 space-y-2 mt-2">
          <li>
            <span className="font-medium">Text Utilities: </span>Convert text to
            uppercase/lowercase, remove extra spaces, remove special characters,
            copy to clipboard, and count words/characters with live preview.
          </li>
          <li>
            <span className="font-medium"> Responsive UI: </span>
            Built with Bootstrap and custom CSS to ensure usability on all
            screen sizes.
          </li>
          <li>
            <span className="font-medium">Responsive Design: </span>Built with
            Tailwind CSS for a seamless, mobile-first experience across all
            device sizes.
          </li>
          <li>
            <span className="font-medium">Real-Time Processing: </span>All
            transformations are applied instantly using React’s state management
            for fast and smooth updates.
          </li>
        </ul>
      </div>
    </>
  );
};
export default Utilspro;
