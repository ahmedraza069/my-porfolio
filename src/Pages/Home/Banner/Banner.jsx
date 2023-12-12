import Button from "../../../Components/Button/Button";
import "./Banner.css";
import {  FaCodepen, FaFacebook } from "react-icons/fa";
import { FaInstagram,  FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { SiClarifai } from "react-icons/si";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/s1JNC0b/banner.png")',
        }}
      >
        <div className="hero lg:py-12 container mx-auto">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src="https://i.ibb.co/BwCFpXQ/hero.png" alt="" />
            </div>
            <div className="card shrink-0 lg:w-1/2">
              <div className="links gap-3 py-8 md:py-6 lg:py-4  flex justify-center lg:justify-start">
                <a
                  className="flex justify-center items-center text-xl"
                  href="#"
                >
                <span className="text-white">
                < FaFacebook />
                </span>
                </a>
                <a
                  className="flex justify-center items-center text-xl text-white"
                  href="#"
                >
                  <FaXTwitter />
                </a>
                <a
                  className="flex justify-center items-center text-xl text-white"
                  href="#"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="flex justify-center items-center text-xl text-white"
                  href="#"
                >
                  <FaInstagram />
                </a>
                <a
                  className="flex justify-center items-center text-xl text-white"
                  href="#"
                >
                  <TbWorld />
                </a>
              </div>
              <h4 className="font-semibold text-2xl text-center lg:text-start  text-gray pt-6">
                Welcome Dear!
              </h4>
              <h3 className="font-bold text-2xl text-center lg:text-start md:text-4xl lg:text-4xl text-gray pt-3 pb-3 lg:pb-5 max-w-xl">
                In my own hand-crafted frontend development world.
              </h3>
              <p className="text-normal text-center lg:text-start md:text-lg px-5 md:px-0 text-stone-600 ">
                Helping design your business and personal website build with
                your demand by html and wordpress. Click the demo work button,
                you can see my previous project.
              </p>
              <div className="flex justify-center lg:justify-start gap-6 pt-8 pb-4">
                <Button className="bg-gray" btnIcon={<FaCodepen />} btnText={"KNOW MORE"}></Button>
                <Button btnText={"DEMO WORD"} btnIcon={<SiClarifai />}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
