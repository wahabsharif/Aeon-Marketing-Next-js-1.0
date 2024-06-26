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
              <Link legacyBehavior href="/gallery">
                <a>
                  <img
                    src="/img/citi-housing-peshawar/Galley-2-(1920x2715).webp"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link legacyBehavior href="/gallery">
                    <a>
                      <img
                        src="/img/citi-housing-peshawar/Gallery-1-(600x446).webp"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link legacyBehavior href="/gallery">
                <a>
                  <img
                    src="/img/citi-housing-peshawar/Galley-3-(1759x2500).webp"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10 offset-lg-2">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link legacyBehavior href="/gallery">
                    <a>
                      <img
                        src="/img/citi-housing-peshawar/Galley-4-(600x446).webp"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="row">
              <div className="col-lg-11 offset-lg-1">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link legacyBehavior href="/gallery">
                    <a>
                      <img
                        src="/img/citi-housing-peshawar/Galley-7-(600x848).webp"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items graphic">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link legacyBehavior href="/gallery">
                <a>
                  <img
                    src="/img/citi-housing-peshawar/Galley-5-(600x446).webp"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="col-md-6 items brand">
            <div className="row">
              <div className="col-lg-10">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link legacyBehavior href="/gallery">
                    <a>
                      <img
                        src="/img/citi-housing-peshawar/Galley-8-(600x848).webp"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 items web">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link legacyBehavior href="/gallery">
                <a>
                  <img
                    src="/img/citi-housing-peshawar/Galley-6-(600x446).webp"
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
