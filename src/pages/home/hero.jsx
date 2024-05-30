import React, { useEffect, useRef, useState } from "react";
import introData from "../../data/home/hero.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import "swiper/css";
import Split from "../../components/Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

const preloadImage = (url) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = url;
  document.head.appendChild(link);
};

const HomeHero = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fadeWhenScroll();
    introData.forEach((slide) => preloadImage(slide.image));
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <header className="slider slider-prlx">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={300}
            autoplay={{ enabled: true }}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            // Enable scrollbar
            scrollbar={{ draggable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                console.log(swiper.slides); // Add this to debug
                if (swiper && swiper.slides && swiper.slides.length) {
                  for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute(
                      "data-swiper-parallax",
                      0.75 * swiper.width
                    );
                  }
                }
              }, 1000); // Adjust based on your needs
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="caption dig">
                          <Split>
                            <h1 className="words chars splitting">
                              {typeof slide.title === "object" ? (
                                <>
                                  {slide.title.first}
                                  <div className="tline">
                                    {slide.title.second}
                                  </div>
                                </>
                              ) : (
                                slide.title
                              )}
                            </h1>
                          </Split>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        <div className="social-icon">
          <a href="https://www.facebook.com/ISP006" className="icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/aeonmarketingoffical/"
            className="icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@aeonmarketing2913" className="icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
