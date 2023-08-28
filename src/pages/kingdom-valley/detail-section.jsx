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
                  DEVELOPER & OWNERS
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Ghulam Hussain Shahid Sanpal takes immense pride as the
                proprietor and visionary behind this residential venture in
                Islamabad. Serving as the Chairman and CEO of the Valley
                Project, Mr. Ghulam Shahid Sanpal is a distinguished figure in
                the real estate domain. The development of this housing project
                is a result of meticulous efforts by a proficient workforce that
                encompasses engineers, architects, builders, planners, and
                managers, all working with utmost dedication.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Currently engrossed in the creation of a true masterpiece,
                Ghulam Hussain Shahid Sanpal&apos;s real estate engineering team
                has a notable reputation for executing harmoniously coordinated
                projects with exceptional planning. The primary objective is to
                revolutionize and elevate the residential experience towards a
                contemporary and vibrant lifestyle. With aspirations set on
                cultivating an elegant and opulent way of living, the team
                places a strong emphasis on delivering outstanding customer
                service and comprehensive guidance.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="" />
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
                  data-splitting>
                  KINGDOM VALLEY FEATURES
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Kingdom Valley Villas represent an endeavor aimed at redefining
                the standards of opulent living in Islamabad. Enriched by theme
                parks, hospitals, educational establishments, and a grand
                mosque, these villas are designed to meet your social needs and
                enhance their allure.
                <ul>
                  <li>01. Grand Masjid</li>
                  <li>02. Hospital</li>
                  <li>03. Education System</li>
                  <li>04. Theme Park</li>
                  <li>05. 24/7 Electricity</li>
                </ul>
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
                  Master Plan
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Crafted by a team of seasoned professionals with extensive
                expertise, Islamabad&apos;s Kingdom Valley stands as a testament
                to their collective prowess. This community caters to both
                essential amenities and luxurious comforts. The company&apos;s
                adept engineers have overseen the establishment of top-notch
                infrastructure. The housing plan in Rawalpindi&apos;s Kingdom
                Valley encompasses a range of plot types.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="" />
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
                  data-splitting>
                  DEVELOPMENT STATUS
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The rapid advancement of this real estate project is quite
                remarkable. The endeavor is a result of collaborative agreements
                between businesses and the government, aimed at introducing
                cutting-edge innovations and upscale features. Moreover, being
                part of the Naya Pakistan Housing Program, homeowners can rest
                assured that the development process will proceed expeditiously,
                benefitting from the legal framework and comprehensive
                government backing of the housing scheme. While challenges may
                occasionally arise from entities like the Rawalpindi Development
                Authority or the Capital Development Authority, both investors
                and residents can find solace in the seamless operation of the
                community. In summary, the project is progressing at an
                accelerated pace, indicating an imminent completion of the
                construction process.
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
                  LOCATION & MAP
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The significance of location holds paramount importance for both
                investors and potential residents when contemplating property
                purchases. The rationale behind this emphasis is rooted in the
                safety and convenience that a well-chosen area can offer for
                daily living requirements. Prior to making a property
                acquisition, buyers often prioritize confirming its
                accessibility from major city arteries.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The Kingdom Valley project distinctly excels in this aspect as
                it occupies a prime position proximate to Islamabad. Positioned
                along the M2 Motorway, it enjoys close proximity to the new
                Islamabad International Airport. Additionally, its location
                boasts the advantage of being a mere 15-minute drive from the
                Srinagar Highway (Kashmir Highway). This strategic placement
                solidifies Kingdom Valley&apos;s stature as a prime
                developmental endeavor within Islamabad&apos;s landscape.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Noteworthy neighboring projects, including Capital Smart City,
                Blue World City, and Mumtaz City, further enhance the
                area&apos;s appeal. The location also enjoys the advantage of
                being approximately 5 kilometers from the Rawalpindi Ring Road.
                Notably, it establishes vital linkages to Bahria Town, DHA
                (Defence Housing Authority), and the New International Airport.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/kingdom-valley/location.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.jpg" alt="" />
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
                  data-splitting>
                  Payment Plan
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
