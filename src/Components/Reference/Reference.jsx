
import { FaUsersCog } from "react-icons/fa";
const Reference = () => {
    return (
        <div>
             <div className="details rounded-md ">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-7xl text-slate-50 font-bold pt-3 pl-3">
              <FaUsersCog />
              </h2>
            </div>
            <div className="number flex justify-center items-center">
              <h2 className="pl-4 pb-4">00</h2>
            </div>
          </div>
          <h2 className="text-6xl mb-[-8px] text-orange flex justify-center  font-bold">
          <FaUsersCog />
          </h2>
          <h2 className="text-5xl text-center pb-24 pt-4 font-semibold card-text">
          The reference is currently not available
          </h2>
        </div>
        </div>
    );
};

export default Reference;