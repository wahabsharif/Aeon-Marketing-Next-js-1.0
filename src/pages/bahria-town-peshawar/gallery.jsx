/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Gallery = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="gallery full-width">
          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link legacyBehavior href="/project-details/project-details-dark">
                <a>
                  <img src="/img/portfolio/works/1.webp" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Creativity Demand</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link
                    legacyBehavior
                    href="/project-details/project-details-dark"
                  >
                    <a>
                      <img src="/img/portfolio/works/2.webp" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Through The Breaking</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link legacyBehavior href="/project-details/project-details-dark">
                <a>
                  <img src="/img/portfolio/works/3.webp" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Create With Creatives</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10 offset-lg-2">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link
                    legacyBehavior
                    href="/project-details/project-details-dark"
                  >
                    <a>
                      <img src="/img/portfolio/works/6.webp" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Blast From The Past</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link
                    legacyBehavior
                    href="/project-details/project-details-dark"
                  >
                    <a>
                      <img src="/img/portfolio/works/5.webp" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>See It Yourself</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link legacyBehavior href="/project-details/project-details-dark">
                <a>
                  <img src="/img/portfolio/works/4.webp" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>Energies of Love</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link
                    legacyBehavior
                    href="/project-details/project-details-dark"
                  >
                    <a>
                      <img src="/img/portfolio/works/7.webp" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Blast From The Past</h6>
                    <span>
                      <a href="#0">Design</a>, <a href="#0">WordPress</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link legacyBehavior href="/project-details/project-details-dark">
                <a>
                  <img src="/img/portfolio/works/8.webp" alt="image" />
                </a>
              </Link>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
