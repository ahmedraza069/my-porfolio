/* eslint-disable react/no-unescaped-entities */

import SectionTitle from "../SectionTitle/SectionTitle";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

import { IoIosMail } from "react-icons/io";


const ContactInfo = () => {
    const iframeStyle = {
        filter: "grayscale(1) contrast(1.2) opacity(0.4)",
      };
  return (
    <div className="container mx-auto">
      <div className="py-4">
        <SectionTitle
          subHeading={"CODING"}
          animateSubHeading={" STRUCTURE"}
          heading={"How do I organize of my coding structure"}
        ></SectionTitle>
      </div>
      <div>
        <div className="links gap-4 py-8 md:py-6 lg:py-4  flex justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <a className="flex justify-center items-center text-xl" href="#">
              <span className="text-white">
                <FaPhone />
              </span>
            </a>
            <div className="flex flex-col justify-center items-center text-gray">
                <h1 className="py-6 font-medium text-2xl">Phone</h1>
                <h3 className="">(+880) 1797277740</h3>
                <h3 className="py-2">(+880) 16467******</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a className="flex justify-center items-center text-xl" href="#">
              <span className="text-white">
                <IoIosMail />
              </span>
            </a>
            <div className="flex flex-col justify-center items-center text-gray">
                <h1 className="py-6 font-medium text-2xl">Email</h1>
                <h3 className="">rakibulhasanraza@gmail.com</h3>
                <h3 className="py-2">ahmed***4202@gmail.com</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a className="flex justify-center items-center text-xl" href="#">
              <span className="text-white">
              <FaLocationDot />
              </span>
            </a>
            <div className="flex flex-col justify-center items-center text-gray">
                <h1 className="py-6 font-medium text-2xl">Location</h1>
                <h3 className="">Rajendrapur Road</h3>
                <h3 className="py-2">Gazipur, Dhaka, Bangladesh</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div>
       
     
     <div className="text-gray-600 body-font relative">
       <div
         
         className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap"
       >
         <div
           
           className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-8  flex items-end justify-start relative"
         >
           <iframe
             width="100%"
             height="100%"
             className="absolute inset-0"
             title="map"
             src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
             style={iframeStyle}
           ></iframe>
           <div className="bg-orange text-white relative flex flex-wrap lg:pr-8 py-6 rounded-md shadow-md">
             <div className="lg:w-1/2 px-6">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                 ADDRESS
               </h2>
               <p className="mt-1">Gazipur, Dhaka, Bangladesh</p>
               <p className="mt-1 text-sm">
                 Get in Touch with Us for Questions, Support, or Collaborations.
                 We're Here to Hear from You and Assist You!
               </p>
             </div>
             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                 EMAIL
               </h2>
               <a className="text-white text-sm leading-relaxed">
                 rakibulhasanraza@gmail.com
               </a>
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                 PHONE
               </h2>
               <p className="leading-relaxed">+880 1797277740</p>
             </div>
           </div>
         </div>
         <div className="p-4 rounded-lg bg-orange text-white flex flex-col md:ml-auto flex-1 md:py-8 mt-8 md:mt-0" >
           <form
             className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
           >
             <label className="block">
               <span className="mb-1">Full name</span>
               <input
                 type="text"
                 placeholder="Your name"
                 className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
               />
             </label>
             <label className="block">
               <span className="mb-1">Email address</span>
               <input
                 type="email"
                 placeholder="leroy@jenkins.com"
                 className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
               />
             </label>
             <label className="block">
               <span className="mb-1">Message</span>
               <textarea
                 rows="3"
                 className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
               ></textarea>
             </label>
             <button
               type="button"
               className="self-center bg-white text-black font-medium px-8 py-3 text-lg rounded"
             >
               Submit
             </button>
           </form>
         </div>
       </div>
     </div>
   </div>
      </div>
    </div>
  );
};

export default ContactInfo;
