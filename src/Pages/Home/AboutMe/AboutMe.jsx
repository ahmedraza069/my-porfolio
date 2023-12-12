/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaDownload, FaUser, FaUserGraduate, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { FaUserSecret } from "react-icons/fa";
import Button from "../../../Components/Button/Button";
import { MdMailLock } from "react-icons/md";
import ExperienceCard from "../../../Components/ExperienceCard";
import EducationCard from "../../../Components/EducationCard/EducationCard";
import Reference from "../../../Components/Reference/Reference";

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleEmailClick = () => {
    window.location.href = "mailto:rakibulhasanraza@gmail.com";
  };
  return (
    <div className="container mx-auto">
      <SectionTitle
        subHeading={"My"}
        animateSubHeading={"Resume"}
        heading={"Some basic information about myself"}
      ></SectionTitle>
      <div className="text-center py-4">
        <Tabs>
          <TabList>
            <div className=" grid grid-cols-2 md:grid-cols-4 md:max-w-3xl px-2 md:px-4 gap-8 mx-auto">
              <Tab>
                <div
                  onClick={() => setSelectedTab(0)} // Set the selected tab index when clicked
                  className={`rounded-lg text-center ${
                    selectedTab === 0
                      ? "bg-orange text-white"
                      : "text-slate-400"
                  }`}
                  style={{ boxShadow: "0px 30px 70px 0px rgba(0,0,0,0.2)" }}
                >
                  <h3 className=" font-medium tracking-wide text-base p-10 text-center">
                    <span className="flex justify-center items-center py-1 text-2xl">
                      <FaUser />
                    </span>{" "}
                    About Me
                  </h3>
                </div>
              </Tab>
              <Tab>
                <div
                  onClick={() => setSelectedTab(1)} // Set the selected tab index when clicked
                  className={`rounded-lg text-center ${
                    selectedTab === 1
                      ? "bg-orange text-white"
                      : "text-slate-400"
                  }`}
                  style={{ boxShadow: "0px 30px 70px 0px rgba(0,0,0,0.2)" }}
                >
                  <h3 className=" font-medium tracking-wide text-base p-10 text-center">
                    <span className="flex justify-center items-center py-1 text-2xl">
                      <FaUserSecret />
                    </span>{" "}
                    Experience
                  </h3>
                </div>
              </Tab>
              <Tab>
                <div
                  onClick={() => setSelectedTab(2)} // Set the selected tab index when clicked
                  className={`rounded-lg text-center ${
                    selectedTab === 2
                      ? "bg-orange text-white"
                      : "text-slate-400"
                  }`}
                  style={{ boxShadow: "0px 30px 70px 0px rgba(0,0,0,0.2)" }}
                >
                  <h3 className=" font-medium tracking-wide text-base p-10 text-center">
                    <span className="flex justify-center items-center py-1 text-2xl">
                      <FaUserGraduate />
                    </span>{" "}
                    Education
                  </h3>
                </div>
              </Tab>
              <Tab>
                <div
                  onClick={() => setSelectedTab(3)} // Set the selected tab index when clicked
                  className={`rounded-lg text-center ${
                    selectedTab === 3
                      ? "bg-orange text-white"
                      : "text-slate-400"
                  }`}
                  style={{ boxShadow: "0px 30px 70px 0px rgba(0,0,0,0.2)" }}
                >
                  <h3 className=" font-medium tracking-wide text-base p-10 text-center">
                    <span className="flex justify-center items-center py-1 text-2xl">
                      <FaUsers />
                    </span>{" "}
                    Reference
                  </h3>
                </div>
              </Tab>
            </div>
          </TabList>

          <TabPanel>
            <div>
              <div className="hero py-8">
                <div className="hero-content flex flex-col-reverse lg:flex-row gap-12 justify-center items-center lg:items-start">
                  <div className="lg:w-1/2">
                    <h1 className="text-4xl text-gray font-semibold text-center lg:text-start ">
                      I'm Md. Rakibul Hasan Raza
                    </h1>
                    <p className="py-3 md:py-6 sm:text-center md:text-start text-slate-500 tracking-wide">
                      I am an aspiring Front-End Developer with a solid
                      foundation in HTML, CSS, and JavaScript. Through academic
                      training and hands-on projects, I've cultivated the skills
                      to create visually appealing and user-friendly websites.
                      Eager to apply my knowledge in a professional setting, I
                      bring a fresh perspective and a commitment to staying
                      current with industry trends. I am excited about the
                      opportunity to contribute to innovative projects and
                      further develop my skills in a collaborative team
                      environment.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between pt-6">
                      <div className="sm:text-start md:text-start lin">
                        <h3 className="text-slate-800 font-medium text-lg pb-4">
                          Birthday:{" "}
                          <span className="text-slate-500">
                            {" "}
                            23 December 2002
                          </span>
                        </h3>
                        <h3 className="text-slate-800 font-medium text-lg">
                          Phone:{" "}
                          <span className="text-slate-500">
                            (+880) 1797277740
                          </span>
                        </h3>
                      </div>
                      <div className="text-center md:text-start pt-3 md:pt-0">
                        <h3 className="text-slate-800 font-medium text-lg pb-4">
                          Lives In:{" "}
                          <span className="text-slate-500">
                            Gazipur, Dhaka, Bangladesh
                          </span>
                        </h3>
                        <h3 className="text-slate-800 font-medium text-lg">
                          Linkedin:{" "}
                          <span className="text-blue-400">
                            <a
                              rel="noreferrer"
                              href="https://www.linkedin.com/in/md-rakibul-hasan-raza-76a2a2260/"
                              target="_blank"
                            >
                              /ahmedraza_069
                            </a>
                          </span>
                        </h3>
                      </div>
                    </div>

                    <h3 className="text-slate-800 text-center lg:text-start pt-4 font-medium text-lg">
                      Github:{" "}
                      <span className="text-blue-400">
                        <a
                          rel="noreferrer"
                          href="https://github.com/ahmedraza069"
                          target="_blank"
                        >
                          https://github.com/ahmedraza069
                        </a>
                      </span>
                    </h3>

                    <h3 className="text-slate-800 font-medium text-lg  text-center lg:text-start pt-4">
                      Website:{" "}
                      <span className="text-slate-500">
                        <a
                          rel="noreferrer"
                          href="https://github.com/ahmedraza069"
                          target="_blank"
                        >
                          www.rakibulhasanraza.com
                        </a>
                      </span>
                    </h3>
                    <div className="flex justify-center items-center md:justify-start gap-5 pt-8 md:pt-10 lg:pt-12">
                      <Button
                        btnText={"download cv"}
                        btnIcon={<FaDownload />}
                        downloadLink="https://drive.google.com/file/d/1YciAK1DYBvrYXJf5Ium_0v9JQVNo3VMi/view?usp=sharing"
                      />
                      <Button
                        btnText={"CONTACT ME"}
                        btnIcon={<MdMailLock />}
                        onClick={handleEmailClick}
                      >
                        <div></div>
                      </Button>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src="https://i.ibb.co/CBvKGjB/about.png"
                      className=" rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-12">
              <ExperienceCard></ExperienceCard>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-12">
              <EducationCard></EducationCard>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="py-12">
              <Reference></Reference>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutMe;
