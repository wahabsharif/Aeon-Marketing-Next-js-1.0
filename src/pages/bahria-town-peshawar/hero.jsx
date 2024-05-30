import React from "react";
import introData from "../../data/bahria-town-peshawar/hero.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Split from "../../components/Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const Hero = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onInit={(swiper) => {
              // Move your logic here to ensure swiper.slides is defined
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].childNodes[0].setAttribute(
                  "data-swiper-parallax",
                  0.75 * swiper.width
                );
              }
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {/* Slides */}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div
          ref={paginationRef}
          className="swiper-pagination top botm custom-font"
        ></div>

        <div className="social-icon">
          <a href="https://www.facebook.com/ISP006">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/aeonmarketingoffical">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@aeonmarketing2913">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
