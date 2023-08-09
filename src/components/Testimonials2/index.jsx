import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import removeSlashFromPagination from '../../common/removeSlashFromPagination';
import testimonialsData from '../../data/sections/testimonials.json';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation]);

const Testimonials2 = () => {
  const [load, setLoad] = useState(true);
  const paginationRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination()
    }, 0);
  }, []);

  return (
    <section className="testim-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="swiper-container bg-img" style={{ backgroundImage: `url('/img/testim-img.jpg')` }} data-overlay-dark="7">
            {!load ? (
              <Swiper
                className="swiper-wrapper"
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                pagination={{
                  el: paginationRef.current,
                  clickable: true,
                  type: 'fraction'
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.params.pagination.el = paginationRef.current;
  
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();

                    swiper.pagination.destroy();
                    swiper.pagination.init();
                    swiper.pagination.update();
                  });
                }}
              >
                {
                  testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="row">
                        <div className="col-lg-8 col-md-10">
                          <div className="item">
                            <h6>{ testimonial.name }</h6>
                            <span>{ testimonial.position }</span>
                            <p>{ testimonial.comment }</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            ) : null }

              <div className="controls">
                <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer" ref={navigationPrevRef}>
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer" ref={navigationNextRef}>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="swiper-pagination custom-font" ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials2