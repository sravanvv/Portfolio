const Experience = () => {
  return (
    <>
      <div className="mx-4 sm:mx-10 lg:mx-64 lg:max-w-4xl lg:mx-auto">
        <h2 className="mt-12 text-4xl font-bold">Experience</h2>
        {/* Experience Block 1 */}
        <div className="mt-6 text-lg">
          <div className="flex flex-col sm:flex-row justify-between">
            <p className="font-semibold text-2xl font-semibold">
              <span className="font-bold">Software Developer </span> at Equitas
              Small Finance Bank
              <span className="text-sm text-gray-500">(Full time)</span>
            </p>
            <div className="flex flex-col">
              <p className="text-sm  pt-1.5">June 2022 - Present</p>
            </div>
          </div>
          <div className="mt-4 text-base text-justify">
            <ul className="list-disc pl-5 space-y-2  ">
              <li>
                Led front-end development using NEWGEN Process Designer,
                JavaScript, and SQL to enhance UI, streamline workflows,
                validations, and document handling, resulting in a 20% boost in
                data accuracy.
              </li>
              <li>
                Developed 70+ audit reports using complex SQL queries in Oracle
                SQL Developer, enhancing case verification for CPC, Credit, and
                Business teams and minimizing issues by 30%.
              </li>
              <li>
                Managed and executed production deployments, reducing deployment
                time by 20% and ensuring smooth implementation of enhancements
                and bug fixes with minimal post-release issues.
              </li>
              <li>
                Collaborated with stakeholders to gather and document
                requirements, aligning development with business goals and
                accelerating project delivery by 20%.
              </li>
              <li>
                Efficiently triaged and resolved support team issues,
                prioritising critical tasks to improve turnaround time by 30%,
                enhancing response speed and team productivity, and ensuring
                minimal operational disruption.
              </li>
              <li>
                Designed and implemented SQL functions and POST APIs to Oracle
                BI Publisher for efficient data extraction and report
                generation, reducing overall document generation time by 20%.
              </li>
              <li>
                Administered JIRA, managing projects, custom workflows, fields,
                and user permissions. Optimized setup and tracking processes,
                enhancing project efficiency by 25%.
              </li>
            </ul>
          </div>
          <ul className="mt-4 ml-5 text-sm flex flex-wrap gap-4">
            <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
              Java
            </li>
            <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
              JavaScript
            </li>
            <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
              Oracle Sql
            </li>
            <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
              Newgen BPMSuite
            </li>
            <li className="border-1 rounded-md border-[#17c3b2] px-2 text-[#17c3b2]">
              Oracle BI Publisher
            </li>
          </ul>
        </div>
        {/* Experience Block 2 */}
        <div className=" mt-6 flex flex-col sm:flex-row justify-between">
          <p className="font-semibold text-2xl font-semibold">
            <span className="font-bold">Product Trainee</span> at HighRadius{" "}
            <span className="text-sm text-gray-500">(Internship)</span>
          </p>
          <p className="text-sm sm:w-3/12 sm:text-right pt-1.5">
            August 2021 - January 2022
          </p>
        </div>
        <div className="mt-4 text-base text-justify">
          <ul className="list-disc pl-5 space-y-2  ">
            <li>
              Led front-end development using NEWGEN Process Designer,
              JavaScript, and SQL to enhance UI, streamline workflows,
              validations, and document handling, resulting in a 20% boost in
              data accuracy.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Experience;
