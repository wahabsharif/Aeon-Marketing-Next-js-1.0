/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../../components/Split";
import initIsotope from "../../common/initIsotope";

const Societies = () => {
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
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Premium Housing
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Projects
            </h3>
          </Split>
        </div>
        <div className="gallery full-width">
          <div className="col-lg-6 items ">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/bahria-town-peshawar">
                <a>
                  <img
                    src="/img/projects-and-socities/bahria-town-peshawar-project-img.webp"
                    alt="Bahria Town Peshawar"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>Bahria Town Peshawar</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/citi-housing-peshawar">
                <a>
                  <img
                    src="/img/projects-and-socities/citi-housing-peshawar-project-img.webp"
                    alt="image"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>Citi Housing Peshawar</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/capital-valley">
                <a>
                  <img
                    src="/img/projects-and-socities/capital-valley-project-img.webp"
                    alt="image"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>Capital Valley</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/park-view-city">
                <a>
                  <img
                    src="/img/projects-and-socities/parkview-city-project-img.jpg"
                    alt="park view city"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>Park View City</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/taj-residencia">
                <a>
                  <img
                    src="/img/projects-and-socities/taj-residencia-project-img.webp"
                    alt="image"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>Taj Residencia</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/rudn-enclave">
                <a>
                  <img
                    src="/img/projects-and-socities/rudn-enclave-project-img.webp"
                    alt="rudn enclave"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>Rudn Enclave</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/kingdom-valley">
                <a>
                  <img
                    src="/img/projects-and-socities/kingdom-valley-project-img.webp"
                    alt="image"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>Kingdom Valley</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 items">
            <div className="item-img wow fadeInUp" data-wow-delay=".4s">
              <Link href="/nmc-gujar-khan">
                <a>
                  <img
                    src="/img/projects-and-socities/new-metro-city-gujar-khan-project-img.webp"
                    alt="New Metro City Gujar Khan"
                  />
                </a>
              </Link>
              <div className="cont">
                <h6>New Metro City Gujar Khan</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Societies;
