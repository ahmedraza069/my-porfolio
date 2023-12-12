
import { SlBadge } from "react-icons/sl";

const ExperienceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="details rounded-md ">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
              <SlBadge />
            </h2>
          </div>
          <div className="number flex justify-center items-center">
            <h2 className="pl-4 pb-4">01</h2>
          </div>
        </div>
        <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
          <SlBadge />
        </h2>
        <h2 className="text-2xl text-center py-4 font-semibold card-text">
          Frontend Developer
        </h2>
        <div className="px-6">
          <p className="text-center card-details pb-10">
            Developed and maintained responsive web interfaces, collaborated
            with back-end developers to integrate front-end elements with
            server-side logic. Conducted code reviews, offering constructive
            feedback to enhance team collaboration and code quality
          </p>
        </div>
      </div>
      <div className="details rounded-md ">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
              <SlBadge />
            </h2>
          </div>
          <div className="number flex justify-center items-center">
            <h2 className="pl-4 pb-4">02</h2>
          </div>
        </div>
        <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
          <SlBadge />
        </h2>
        <h2 className="text-2xl text-center py-4 font-semibold card-text">
          Junior MERN Stack Developer
        </h2>
        <div className="px-6">
          <p className="text-center card-details pb-10">
            Collaborated on MERN stack projects, crafting responsive interfaces
            with React.js, building RESTful APIs in Node.js and Express.js,
            optimizing MongoDB, integrating third-party APIs, and contributing
            to code reviews and daily stand-ups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
