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
                  Location
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Capital Valley Islamabad is positioned at an incredibly
                convenient juncture, with prominent landmarks just a few
                kilometers from its vicinity.
                <ul className="wow fadeInUp" data-wow-delay=".4s">
                  <li>1. Islamabad International Airport 0 km</li>
                  <li>2. Thalian Interchange 5 Minutes</li>
                  <li>3. Motorway M2 5 Minutes</li>
                  <li>4. G-13 20 Minutes</li>
                  <li>5. Srinagar Highway 10 Minutes</li>
                  <li>6. Peshawar Road 15 Minutes</li>
                  <li>7. Quaid e Azam International Hospital 22 Minutes</li>
                  <li>8. Saddar 30 Minutes</li>
                  <li>9. Jinnah Super Market 34 Minutes</li>
                  <li>10. Ring Road 3 Minutes</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img
                  src="/img/capital-valley/Location.webp"
                  alt="Capital Valley Location"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img
                  src="/img/capital-valley/Developers.webp"
                  alt="capital-valley-images"
                />
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
                  Developers
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Capital Valley Islamabad is masterminded by Capital Valley, a
                firm with a track record of successfully executing numerous
                construction and development ventures in the past. Overseeing
                the town planning of Capital Valley Islamabad is The Urban
                Solutions Pvt Ltd, a well-regarded entity in the nation&apos;s
                real estate sector. They have garnered a reputable standing,
                having been entrusted with development consultancy by prominent
                entities such as DHA, CBR, The Grand City Kharian, and Fazaia
                Housing Scheme. Contributing to the landscape mapping of the
                community is Green Thumb, actively engaged in ensuring a surplus
                of green spaces that surpasses other housing societies in the
                region.
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
                  Capital Valley Islamabad Executive Block
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Capital Valley Islamabad stands as one of the recent
                introductions in Islamabad&apos;s real estate landscape. The
                capital city has transformed into a focal point for real estate
                advancements, with numerous novel housing communities sprouting
                up in various corners, showcasing the substantial demand for
                properties. Positioned along Motorway M-2 and in proximity to
                the newly established Islamabad International Airport, Capital
                Valley Islamabad is an integral part of these contemporary
                expansions. The project is being marketed as Airport Zero Km,
                emphasizing its close proximity to the Islamabad Airport. It
                presents an appealing investment prospect for individuals
                seeking to invest in a modern housing society through a
                convenient installment plan. Furthermore, its location adjacent
                to Top City-1 and Airport Green Garden underscores its
                investment potential, indicating the promise of heightened
                returns.
                <ul className="wow fadeInUp" data-wow-delay=".4s">
                  <li>01. 5,7,10 Marla & 1 Kanal plots booking started.</li>
                  <li>02. 1 & 4 years easy instalment plan.</li>
                  <li>
                    03. Located on M-2 Motorway and 𝟎 𝐊𝐌 from New Islamabad
                    International Airport.
                  </li>
                  <li>
                    04. Development work has been started in the Executive
                    block.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img
                  src="/img/capital-valley/executive-block.webp"
                  alt="capital-valley-images"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img
                  src="/img/capital-valley/general-block.webp"
                  alt="capital-valley-images"
                />
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
                  Capital Valley Islamabad General Block
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Capital Valley Islamabad constitutes one of the recent
                inclusions in Islamabad&apos;s real estate realm. The capital
                metropolis has evolved into a nucleus of real estate
                advancements, evidenced by a multitude of novel residential
                communities springing up in every corner of the city, indicative
                of a substantial property demand. Capital Valley Islamabad
                aligns with these modern expansions, positioned towards Motorway
                M-2 and in proximity to the newly established Islamabad
                International Airport. Branded as Airport Zero Km, this housing
                project accentuates its immediate adjacency to the Islamabad
                Airport. It stands as a compelling investment prospect, catering
                to those seeking to invest in a contemporary housing society
                through a convenient installment arrangement. Additionally, its
                strategic location neighboring Top City-1 and Airport Green
                Garden underscores its investment allure, consequently
                projecting the potential for elevated returns.
                <ul className="wow fadeInUp" data-wow-delay=".4s">
                  <li>01. 5,7,10, 14 Marla & 1 Kanal plots.</li>
                  <li>02. 1 & 4 years easy instalment plan.</li>
                  <li>
                    03. Located on M-2 Motorway and 𝟎 𝐊𝐌 from New Islamabad
                    International Airport.
                  </li>
                  <li>
                    04. Development work has been started in the Executive
                    block.
                  </li>
                  <li>05. General Block Booking Closed.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
