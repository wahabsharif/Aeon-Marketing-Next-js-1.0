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
                  data-splitting
                >
                  Properties within Bahria Town Peshawar set to be unveiled in
                  the near future.
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Both residential and commercial properties will soon be
                accessible within Bahria Town Peshawar. The project will
                encompass plots of various dimensions, as well as the
                introduction of villas and apartments. The residential segment
                will feature plot sizes of 5 Marla, 10 Marla, 1 Kanal, and 2
                Kanal. Additionally, commercial plots of two distinct sizes will
                also be introduced.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="bahria-town-peshawar-images" />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="bahria-town-peshawar-images" />
              </div>
            </div>
          </div>
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
                  data-splitting
                >
                  What makes Bahria Town Peshawar the optimal choice?
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Numerous amenities, top-tier development, and appealing features
                combine to render this project a favorable choice. Moreover, the
                established credibility of the Bahria Town brand serves as a
                driving force behind the keen interest of both buyers and
                investors.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Upon its inauguration, Bahria Town is poised to establish novel
                benchmarks for contemporary living. Every facet of this modern
                venture is set to be exceptional. A diverse selection of
                properties will be on offer, accompanied by convenient
                installment options catering to everyone&apos;s needs.
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
                  data-splitting
                >
                  Advantages of Residing in Bahria Peshawar.
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                There are countless reasons that you consider to live in Bahria
                Town. However, some of the top among them can be:
              </p>
              <ul className="wow fadeInUp" data-wow-delay=".4s">
                <li>
                  -The provision of uninterrupted electricity, gas and clean
                  water
                </li>
                <li>-Standard educational and healthcare facilities</li>
                <li>-Clean and maintained infrastructure</li>
                <li>-Natural, and fresh environment with lots of greenery</li>
                <li>-Safe, secure and peaceful living with your family</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="bahria-town-peshawar-images" />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="bahria-town-peshawar-images" />
              </div>
            </div>
          </div>
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
                  data-splitting
                >
                  Why Should You Consider Investing in Bahria Peshawar?
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                There are numerous factors that could drive your decision to opt
                for this housing community. However, a compelling reason to
                consider investing in Bahria Peshawar is the potential for
                substantial profits. The properties within Bahria Peshawar are
                designed to be not only cost-effective but also offer flexible
                payment plans.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Bahria Town is poised to redefine the living experience in KPK.
                Envisioned as the second-largest housing development after
                Bahria Town Karachi, this project is set to be developed to the
                standards akin to those seen in Kuwait, Qatar, and Dubai.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Furthermore, this master-planned community will span over
                100,000 Kanal of land, ensuring robust security measures, safety
                protocols, complimentary medical camps, and an array of other
                facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
