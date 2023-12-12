import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Typewriter } from "react-simple-typewriter";

const CodingStruture = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        subHeading={"CODING"}
        animateSubHeading={" STRUCTURE"}
        heading={"How do I organize of my coding structure"}
      ></SectionTitle>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-8">
            <div className="lg:w-1/2">
              <img
                src="https://i.ibb.co/0ZrGyxz/coding.jpg"
                className="w-full rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h1 className="text-2xl lg:text-4xl font-semibold text-center lg:text-start">
                Comprehensive Guide to{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["Organizing", "Writing", "Maintaining"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={120}
                    deleteSpeed={120}
                    delaySpeed={1000}
                  />
                </span>
                High-Quality Code Structures
              </h1>

              <p className="py-6 text-slate-500 text-center lg:text-start">
                Optimize code structure with effective file organization,
                naming, and modularization. Embrace coding style, comments,
                error handling, testing, and version control for streamlined
                development
              </p>
              <div>
                <ul className="steps steps-vertical">
                  <li
                    data-content="●"
                    className="step step-neutral text-base"
                  >
                   Clear file organization and consistent naming conventions.
                  </li>
                  <li
                    data-content="●"
                    className="step step-neutral text-base"
                  >
                    Modularize code for scalability and maintainability.
                  </li>
                  <li
                    data-content="●"
                    className="step step-neutral text-base"
                  >
                    Enforce coding style and consistent formatting standards.
                  </li>
                  <li
                    data-content="●"
                    className="step step-neutral text-base"
                  >
                   Use comments and documentation for code understanding.
                  </li>
                  <li
                    data-content="●"
                    className="step step-neutral text-base"
                  >
                    Implement automated testing for reliable codebase.
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingStruture;
