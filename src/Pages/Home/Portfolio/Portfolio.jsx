import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import './Portfolio.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Portfolio = () => {
  return (
    <div className="container mx-auto pb-10">
      <SectionTitle
        subHeading={"MY"}
        animateSubHeading={" PORTFOLIO"}
        heading={"Take a look some of my featured projects"}
      ></SectionTitle>
      <div>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
            <div className="wpc-img border-2 border-orange rounded-md">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/Bf07QRy/screencapture-retail-and-e-commerce-project-web-app-2023-12-12-07-58-41.png" alt="" />
            </a>
            </div>
          </SwiperSlide>
         
      
          <SwiperSlide>
            <div className="wpc-img">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/rcVK9f6/screencapture-express-times-newspapers-web-app-2023-12-12-07-55-48.png" alt="" />
            </a>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="wpc-img">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/bRzKb59/screencapture-ahmedraza069-github-io-baby-shop-e-commerce-website-2023-12-12-07-58-56.png" alt="" />
            </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wpc-img">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/9sfh9V8/screencapture-ahmedraza069-github-io-B8-A2-gamer-zone-full-responsive-portfoli0-2023-12-12-07-59-15.png" alt="" />
            </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wpc-img">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/xGrS26x/screencapture-ahmedraza069-github-io-flower-shop-2023-12-12-07-59-27.png" alt="" />
            </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wpc-img">
            <a href="https://ahmedraza069.github.io/gym-web-landing-page/" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/vVHX4kk/screencapture-ahmedraza069-github-io-gym-web-landing-page-2023-12-12-07-15-45.png" alt="" />
            </a>
            </div>
          </SwiperSlide>
       
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
