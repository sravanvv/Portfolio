const Projects = () => {
  return (
    <>
      <div className="mx-4 sm:mx-10 md:mx-28">
        <h2 className="text-2xl font-medium sm:text-3xl sm:font-semibold md:text-4xl md:font-semibold mt-14 mb-8">
          Projects
        </h2>
        <div className="mt-2 sm:mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Project 1 */}
          <div className="flex flex-col items-start mx-6 sm:mx-0">
            <div className="group relative ">
              <a href="./VmartPro" className="block w-full h-full relative">
                <img
                  src="/Images/VMART1.jpeg"
                  alt="VMart Project"
                  className="rounded-lg object-contain w-full h-64 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         bg-black/50 text-white text-sm font-medium"
                >
                  Read More
                </div>
              </a>
            </div>
            <p className="mt-2 font-semibold text-xl prose">
              V Mart – Discount Product Showcase
            </p>
            <p className="text-sm ">
              React app with Google Sheets integration to show real-time
              discounts.
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-start mx-6 sm:mx-0">
            <div className="group relative">
              <a href="" className="block w-full h-full relative">
                <img
                  src="/Images/product.png"
                  alt="Text Utils"
                  className="rounded-lg object-contain w-full h-64 transition-transform duration-300"
                />
                {/* <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         bg-black/50 text-white text-sm font-medium"
                >
                  Read More
                </div> */}
              </a>
            </div>

            <p className="mt-2 font-semibold text-xl">
              Product Manager Dashboard
            </p>
            <p className="text-sm">
              React app with Node.js and MongoDB integration to manage products
              with full CRUD support.
            </p>
          </div>
          {/* Project 3 */}
          <div className="flex flex-col items-start mx-6 sm:mx-0">
            <div className=" group relative">
              <a href="./Utilspro" className="block w-full h-full relative">
                <img
                  src="/Images/utils2.png"
                  alt="Text Utils"
                  className="rounded-lg object-contain w-full h-64 transition-transform duration-300 "
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300 
                         bg-black/50 text-white text-sm font-medium"
                >
                  Read More
                </div>
              </a>
            </div>
            <p className="mt-2 font-semibold text-xl">Text Utils</p>
            <p className="text-sm">
              React-based utility tool for text transformations and analysis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
