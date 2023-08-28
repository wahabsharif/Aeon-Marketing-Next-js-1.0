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
                  Owners And Developers:
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The driving force behind New Metro City Gujar Khan, its owner
                and CEO Bilal Bashir Malik, commands recognition within the
                business realm. BSM Developers, a seasoned player in the real
                estate sector, spearheads the project&apos;s development. Backed
                by a proficient team, the developer envisions crafting a
                globally exceptional infrastructure for New Metro City.
                Furthermore, the company boasts a track record of constructing
                top-tier properties in Pakistan&apos;s prominent urban centers.
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
                  NOC
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The Rawalpindi Development Authority (RDA) has granted approval
                for the No Objection Certificate (NOC) of New Metro City Gujjar
                Khan. This endorsement provides reassurance to potential
                investors, affirming the viability of making an investment in
                this remarkable housing community.
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
                  Location:
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Undoubtedly, the significance of a housing society location
                cannot be understated. With this in mind, meticulous planning
                has gone into siting this project at one of the most coveted and
                optimal positions within the city. Nestled near Islamabad, right
                along the main GT Road, the New Metro City Gujar Khan&apos;s
                primary entrance is directly accessible from this road,
                complemented by several secondary entry points via other routes.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Ease of navigation is a hallmark of New Metro City Gujar Khan,
                owing to its strategic proximity to key highways within the twin
                cities region. This society offers a truly exceptional living
                and investment environment. Given its exceptional connectivity
                and accessibility, all essential amenities and commercial
                establishments are conveniently within reach. This housing
                society presents a compelling investment opportunity for those
                in search of a quality lifestyle in close proximity to
                Islamabad. Its standout feature lies in its strategic location
                and an attractive price point.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/nmc-gujar-khan/location.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/nmc-gujar-khan/features.jpg" alt="" />
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
                  Pros For Investors:
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The astute real estate investors will undoubtedly recognize the
                strategic advantage of New Metro City Gujar Khan&apos;s
                location. While the pre-launch prices currently remain
                reasonable, there is a strong anticipation that they will
                experience a significant surge, potentially quadrupling in just
                a few years. The project&apos;s comprehensive design
                meticulously incorporates all the vital elements of a lavish
                residential environment. What&apos; more, the presence of
                top-notch schools and hospitals in the vicinity further enhances
                the appeal of New Metro City, rendering it an ideal and
                desirable living destination.
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
                Through collaboration with a team of seasoned professionals
                encompassing architects and civil engineers, the project
                blueprint for New Metro City Housing Scheme Gujar Khan was
                meticulously crafted. Notably, there is a pronounced focus on
                infrastructure development in Gujar Khan, aimed at setting it
                apart from other housing societies in the region.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                For those in pursuit of a fresh abode to embrace as their own or
                seeking to invest for profitable returns, the New Metro City
                Housing Scheme extends a plethora of enticing possibilities:
                <ul>
                  <li>3 Marla</li>
                  <li>5 Marla</li>
                  <li>7 Marla</li>
                  <li>10 Marla</li>
                  <li>1 Kanal</li>
                </ul>
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
