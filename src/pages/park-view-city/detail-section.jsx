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
                  Park View City Islamabad Developer
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The developer behind Park View City Islamabad is The Vision
                Group, a distinctive endeavor led by the prominent political
                figure Aleem Khan. Founded in 2012, Vision Group has garnered
                recognition for delivering reliable living spaces with top-tier
                amenities. Park View City in Islamabad marks Vision Group&apos;s
                inaugural project in the capital, receiving considerable acclaim
                for its meticulous design that seamlessly fuses contemporary
                flair with sophisticated elegance.
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
                <img src="/img/park-view-city/proximity.jpg" alt="" />
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
                  Park View City in Islamabad Location
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Convenience stands as the most alluring attribute for any
                residential development, often driving investor interest in
                accessibility. Park View Society Islamabad excels in this
                aspect, truly hitting the mark. The location and ease of access
                of this housing project are self-evident.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Positioned near Bahria Enclave on Malot Road in Zone IV of the
                capital city of Pakistan, Park View Society Islamabad is
                encompassed by the verdant expanse of Bani Gala, offering
                picturesque surroundings. A mere 15-minute drive separates Park
                View Islamabad from the city center.
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
                  Park View City Islamabad NOC
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Park View City Islamabad has not only obtained CDA approval but
                also secured its NOC (No Objection Certificate). Previously, the
                NOC was revoked due to inadequate access from Malot Road.
                However, the noteworthy update is that on June 1st, 2018, Park
                View City&apos;s NOC was successfully reapproved by CDA,
                encompassing all essential planning permissions.
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
                  Park View City Islamabad Master Plan
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                To understand the layout of the complex well, the following map
                is the best to look at:
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
                  Park View City Islamabad Features
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Park View City stands out as a groundbreaking real estate
                venture in Islamabad, offering essential life amenities coupled
                with remarkable features. The creators of this expansive project
                have tirelessly strived to guarantee round-the-clock
                availability of fundamental services to its residents.
                <ul>
                  <li>1. Secured Community</li>
                  <li>2. 24/7 Surveillance</li>
                  <li>3. 24/7 Supply of Water, Electricity & Gas</li>
                  <li>4. Underground Electricity Supply</li>
                  <li>5. Schools</li>
                  <li>6. Mosque</li>
                  <li>7. Modern Infrastructure</li>
                  <li>8. Sports Complex</li>
                  <li>9. Imax Cinemas</li>
                  <li>10. Parks & Zoos</li>
                  <li>11. Commercial Areas</li>
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
