/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../components/Split";
import "react-circular-progressbar/dist/styles.css";

const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting>
                  Location
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Conveniently positioned at the center of Peshawar, Citi Housing
                Scheme offers residents effortless reach to key transport
                networks, educational establishments, medical services, and
                business hubs. Positioned in close proximity to the northeastern
                starting point of the M-1 motorway and the Peshawar Ring Road,
                the community benefits from smooth links to all parts of the
                city.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img
                  src="/img/citi-housing-peshawar/Location.webp"
                  alt="Location"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-12 valign">
            <div className="content">
              <div className="sub-title">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting>
                  INFRASTRUCTURE
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The infrastructure and utilities of Citi Housing Scheme Peshawar
                are of exceptional quality, designed to meet the requirements of
                its inhabitants. The housing scheme provides residents with
                properly kept roads, reliable water and electricity provision,
                and contemporary sewage systems, all contributing to a seamless
                and comfortable lifestyle.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Citi Housing Scheme Peshawar presents a splendid selection of
                architectural wonders that harmoniously fuse contemporary
                elegance with enduring allure. Ranging from modern villas to
                chic apartments, the housing scheme presents a wide variety of
                housing choices to accommodate various tastes and necessities.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting>
                  Features & Amenities
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Offer an extensive assortment of amenities and facilities.
                <ul className="wow fadeInUp" data-wow-delay=".4s">
                  <li>01. PARKS AND COMMUNITY CENTERS</li>
                  <li>02. EDUCATIONAL INSTITUTIONS</li>
                  <li>03. HEALTH FACILITIES</li>
                  <li>04. SECURITY AND SAFETY</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img
                  src="/img/citi-housing-peshawar/citi-housing-amenities.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-12 valign">
            <div className="content">
              <div className="sub-title">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting>
                  INVESTMENT OPPORTUNITIES IN CITI HOUSING PESHAWAR
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Purchasing a property within Citi Housing Scheme Peshawar goes
                beyond being a prudent financial choice – it stands as a stride
                towards a prosperous tomorrow. The housing scheme presents
                alluring prospects for investment, holding the promise of
                substantial gains and a thriving real estate arena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
