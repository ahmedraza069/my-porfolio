/* eslint-disable react/no-unescaped-entities */
import { FaServicestack } from "react-icons/fa";
import "./Card.css";
const Card = () => {
  return (
    <div>
      <section id="banner_middle_part">
        <div className="">
          <div className="flex">
            <div className="">
              <div className="flex-box">
                <div className="upper_part">
                  <div className="">
                    <div className="icon">
                      <FaServicestack />
                    </div>
                    <div className="number">
                      <h2>01</h2>
                    </div>
                  </div>
                </div>
                <div className=" justify-content-center middle_icon">
                  <i className="fa-solid fa-computer"></i>
                </div>
                <div className=" justify-content-center">
                  <h4>Web development</h4>
                </div>
                <div className=" justify-content-center ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Non
                    neque voluptate esse in nobis eius commodi mollitia
                    voluptatem Helllo I'm Ahmed Raza
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button>
                    <a href="#">View Details</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
