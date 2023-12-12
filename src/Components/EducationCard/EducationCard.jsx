import { FaGraduationCap } from "react-icons/fa6";

const EducationCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="details rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaGraduationCap />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">01</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaGraduationCap />
          </h2>
          <h2 className="text-2xl text-center py-4 font-semibold card-text">
          Bachelor of Science in Computer Science & Engineering (Running)
          </h2>
          <div className="px-6">
            <p className="text-center font-bold card-details pb-2">
            University Of South Asia
            </p>
            <p className="text-center  card-details pb-10">
            Amin Bazar, Savar, Dhaka
            </p>
          </div>
        </div>
        <div className="details rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
                <FaGraduationCap />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">02</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
            <FaGraduationCap />
          </h2>
          <h2 className="text-2xl text-center py-4 font-semibold card-text">
          Diploma in Computer Science Engineering
          </h2>
          <div className="px-6">
            <p className="text-center font-bold card-details pb-2">
            Kishoreganj Polytechnic Institute
            </p>
            <p className="text-center card-details pb-2">
            Result : CGPA-3.61 out of 4.00
            </p>
            <p className="text-center card-details pb-10">
            Kishoreganj, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    );
};

export default EducationCard;