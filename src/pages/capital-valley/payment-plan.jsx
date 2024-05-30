import React from "react";
import works1SliderData from "../../data/capital-valley/payment-plan.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../../components/Split";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const PaymentPlan = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="work-carousel section-padding pt-0 metro position-re">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="sec-head custom-font text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Payment
              </h6>
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  Plan
                </h3>
              </Split>
              <span className="tbg">Plan</span>
            </div>
            <div className="swiper-container">
              <Swiper
                className="swiper-wrapper"
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    if (swiper && swiper.params && swiper.params.navigation) {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      // Safely attempt to destroy the navigation module
                      if (swiper.navigation) {
                        swiper.navigation.destroy();
                      }

                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  }, 100); // Adjusted timeout to a smaller value for immediate execution
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: false,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                }}
              >
                {works1SliderData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Link
                        legacyBehavior
                        href="/pdf/capital-valley-payment-plan.pdf"
                        passHref
                      >
                        <div
                          className="item-img bg-img wow imago"
                          style={{
                            backgroundImage: `url(${slide.image})`,
                          }}
                        ></div>
                      </Link>
                      <div className="cont">
                        <h6 className="color-font">
                          <Link
                            legacyBehavior
                            href="/pdf/capital-valley-payment-plan.pdf"
                          >
                            {slide.title}
                          </Link>
                        </h6>
                        <h4>
                          <Link
                            legacyBehavior
                            href="/pdf/capital-valley-payment-plan.pdf"
                          >
                            {slide.secTex}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
              >
                <span className="simple-btn right">Next</span>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer"
              >
                <span className="simple-btn">Prev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
