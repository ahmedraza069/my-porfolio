// Components/Button/Button.js

import "./button.css";

const Button = ({ btnText, btnIcon, onClick, downloadLink }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the button click
    if (onClick) {
      onClick();
    }
  };


  if (downloadLink) {
    return (
      <div className="links">
        <button>
          <a
            href={downloadLink}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-main font-medium md:font-semibold tracking-wide text-sm md:text-normal text-white bg-orange px-4 py-2 md:py-4 md:px-6 rounded-full flex justify-center items-center gap-1">
              {btnIcon}
              {btnText}
              
            </button>
          </a>
        </button>
      </div>
    );
  } else {
    return (
      <div className="links">
        <button
          onClick={handleClick}
          className="btn-main font-medium md:font-semibold tracking-wide text-sm md:text-normal text-white bg-orange px-4 py-2 md:py-4 md:px-6 rounded-full flex justify-center items-center gap-1"
        >
          {btnIcon}
          {btnText}
        </button>
      </div>
    );
  }
};

export default Button;
