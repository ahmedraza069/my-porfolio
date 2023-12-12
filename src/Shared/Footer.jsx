import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-50">
        <aside>
        <div><img className="w-52" src="https://i.ibb.co/XSz0M2d/logo.png" alt=""/></div>
          <div className="md:py-4">
          <div className="links gap-4 py-8 md:py-6 lg:py-4  flex justify-center lg:justify-start">
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
          </div>
        
          <div className="md:flex justify-center items-center">
          <p className="text-lg">Copyright &copy; - <span className="text-orange">2023</span> <span className="mx-3">|</span></p>
          <p className="text-lg">All rights reserved by - <span className="text-orange">Md. Rakibul Hasan Raza</span> <span className="mx-3">|</span></p>
          <p className="text-lg">Developed by - <span className="text-orange">Md. Rakibul Hasan Raza</span> <span className="mx-3"></span></p>
         
          </div>
        </aside> 
        
      </footer>
    );
};

export default Footer;