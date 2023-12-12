import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../Components/Button/Button";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-base-100 shadow-lg">
      <div className="navbar  py-8 container mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content border border-orange mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange" : ""
                  }
                  style={{
                    transition: "border-bottom-color 0.3s, color 0.3s",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-orange" : ""
                  }
                  style={{
                    transition: "border-bottom-color 0.3s, color 0.3s",
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="w-48"
              src="https://i.ibb.co/XSz0M2d/logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-semibold text-base">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-orange text-orange"
                  : ""
              }
              style={{
                transition: "border-bottom-color 0.3s, color 0.3s",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-orange text-orange"
                  : ""
              }
              style={{
                transition: "border-bottom-color 0.3s, color 0.3s",
              }}
            >
              My Resume
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-orange text-orange"
                  : ""
              }
              style={{
                transition: "border-bottom-color 0.3s, color 0.3s",
              }}
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-orange text-orange"
                  : ""
              }
              style={{
                transition: "border-bottom-color 0.3s, color 0.3s",
              }}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-orange text-orange"
                  : ""
              }
              style={{
                transition: "border-bottom-color 0.3s, color 0.3s",
              }}
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/contact"}>
            <Button
              onClick={goTo}
              btnIcon={<FaCode />}
              btnText={"Need To Talk"}
            >
              {" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
