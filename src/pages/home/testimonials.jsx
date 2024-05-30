/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../components/Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import parallaxie from "../../common/parallaxie";

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
    parallaxie(".testimonials.bg-img.parallaxie");
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${
          this.props.subBgLftstl ? "sub-bg lftstl" : ""
        } ${this.props.withBG ? "bg-img" : ""} ${
          this.props.parallaxie ? "parallaxie" : ""
        } ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/3.webp)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What They Are Saying?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <p>
                    &quot;AEON Marketing&apos;s exceptional professionalism,
                    personalized strategy, and flawless communication led to a
                    quick, lucrative sale. Highly recommended for real estate
                    needs.&quot;
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <></>
                        ) : (
                          <>
                            <div className="img">
                              <img
                                src="/img/clients/1.webp"
                                alt="aeon-marketing-testimonials"
                              />
                            </div>
                            <h6 className="author-name custom-font">
                              Sarah Tanveer
                            </h6>
                            <span className="author-details">Freelancer</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    &quot;AEON Marketing&apos;s agents exceeded my expectations,
                    understanding my needs, curating ideal options, providing
                    valuable insights, and ensuring a seamless, gratifying
                    home-buying journey.&quot;
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <></>
                        ) : (
                          <>
                            <div className="img">
                              <img
                                src="/img/clients/1.webp"
                                alt="aeon-marketing-testimonials"
                              />
                            </div>
                            <h6 className="author-name custom-font">
                              Muhammad Tayyab
                            </h6>
                            <span className="author-details">Stock Broker</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                    &quot;AEON Marketing stands out with its commitment,
                    innovation, and market insights. Their proactive approach
                    creates successful opportunities for investors and
                    homebuyers.&quot;
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <></>
                        ) : (
                          <>
                            <div className="img">
                              <img
                                src="/img/clients/1.webp"
                                alt="aeon-marketing-testimonials"
                              />
                            </div>
                            <h6 className="author-name custom-font">
                              Abdul Wasay
                            </h6>
                            <span className="author-details">
                              Brand Ambassador - BT
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials;
