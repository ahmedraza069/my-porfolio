import { FaBiohazard } from "react-icons/fa";
import "./ServicesCard.css";

const ServicesCard = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="details rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaBiohazard />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">01</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaBiohazard />
          </h2>
          <h2 className="text-xl text-center py-4 font-medium card-text">
            Web Application Development
          </h2>
          <div className="px-6">
            <p className="text-center card-details">
              Crafting visually engaging websites with HTML, CSS, and
              JavaScript, ensuring seamless user experiences across diverse
              devices through responsive design techniques.
            </p>
          </div>
          <div className="text-center py-8">
            <button className="py-3 px-5 bg-white rounded-lg">
              View Details
            </button>
          </div>
        </div>
        <div className="details rounded-md ">
          <div className="flex justify-between">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaBiohazard />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">02</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaBiohazard />
          </h2>
          <h2 className="text-xl text-center py-4 font-medium card-text">
            Front-End Development
          </h2>
          <div className="px-6">
            <p className="text-center card-details">
              Creating dynamic user interfaces with React, leveraging front-end
              libraries and frameworks, and optimizing website performance for
              seamless user experiences and improved functionality
            </p>
          </div>
          <div className="text-center py-8">
            <button className="py-3 px-5 bg-white rounded-lg">
              View Details
            </button>
          </div>
        </div>
        <div className="details rounded-md ">
          <div className="flex justify-between">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaBiohazard />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">03</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaBiohazard />
          </h2>
          <h2 className="text-xl text-center py-4 font-medium card-text">
            MERN Stack Development
          </h2>
          <div className="px-6">
            <p className="text-center card-details">
              Building dynamic web applications with React, Firebase, MongoDB,
              and Express.js, crafting robust and scalable online platforms for
              enhanced user experiences and functionality.
            </p>
          </div>
          <div className="text-center py-8">
            <button className="py-3 px-5 bg-white rounded-lg">
              View Details
            </button>
          </div>
        </div>
        <div className="details rounded-md ">
          <div className="flex justify-between">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaBiohazard />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">04</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaBiohazard />
          </h2>
          <h2 className="text-xl text-center py-4 font-medium card-text">
            Database Management
          </h2>
          <div className="px-6">
            <p className="text-center card-details">
              Establishing and overseeing MongoDB databases for MERN stack apps,
              prioritizing data integrity, and implementing robust storage
              solutions for efficient data retrieval and management.
            </p>
          </div>
          <div className="text-center py-8">
            <button className="py-3 px-5 bg-white rounded-lg">
              View Details
            </button>
          </div>
        </div>
        <div className="details rounded-md ">
          <div className="flex justify-between">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaBiohazard />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">05</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaBiohazard />
          </h2>
          <h2 className="text-xl text-center py-4 font-medium card-text">
            User Authentication
          </h2>
          <div className="px-6">
            <p className="text-center card-details">
              Developing secure user authentication and authorization systems
              for applications, with the option to seamlessly integrate
              third-party authentication services for enhanced security and
              functionality.
            </p>
          </div>
          <div className="text-center py-8">
            <button className="py-3 px-5 bg-white rounded-lg">
              View Details
            </button>
          </div>
        </div>
        <div className="details rounded-md ">
          <div className="flex justify-between">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaBiohazard />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">06</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaBiohazard />
          </h2>
          <h2 className="text-xl text-center py-4 font-medium card-text">
            Collaboration and Communication
          </h2>
          <div className="px-6">
            <p className="text-center card-details">
              Collaborating with design teams to implement captivating UI/UX
              designs, and working with back-end developers for seamless
              integration of front-end and back-end components.
            </p>
          </div>
          <div className="text-center py-8">
            <button className="py-3 px-5 bg-white rounded-lg">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
