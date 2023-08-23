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
                  Developer&apos;s Team
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Management of RUDN Enclave proudly associates a landmark
                developer’s team comprising Urban planning and Design Limited
                (UPDL). Their subsidiaries Alhaq Builders, and the horticulture
                fame New Leafs as the master developers manage and implement all
                aspects of Project management, Development works, and
                Horticulture. Affordability, Timeliness, and par excellence are
                the defining contours of this professional team.
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
                  Location
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                The strategic positioning of Rudn Enclave brings a novel
                dimension to the real estate landscape, presenting investors
                with an opportunity to optimize their returns. The society
                boasts an astonishing proximity to Adiala Road, a crucial
                connector between the twin cities, skirting two picturesque
                ponds, and conveniently linked to the M2 Motorway and the N-5
                National Highway. Marking its nearest landmark is the Thalian
                interchange. Rudn Enclave&apos;s location holds a prime stature
                in Rawalpindi, offering residents a serene living environment
                while ensuring seamless connectivity to the city&apos;s major
                road networks. Situated on Adyala Road within Mouza Khasala
                Khurd, right adjacent to Khasala Dam, Rudn Enclave enjoys a
                privileged position. Accessibility to Rudn Enclave is
                facilitated from Chakri Road, Saddar, and Bahria Town Phase 8,
                thanks to its placement between the Khasala Dam and Jawa Dam.
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
                  Features
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Rudn Enclave stands as a meticulously designed gated community,
                encompassing an array of modern conveniences and breathtaking
                attributes. It serves as a prime illustration of the pinnacle of
                luxurious elements in Pakistan. This secured haven stands as a
                haven for residents of the twin cities and the entire nation.
                The expansive project&apos;s features have been meticulously
                deliberated upon and necessitated specialized skill to bring
                them to fruition. Below are some of the features slated for this
                endeavor:
                <ul>
                  <li>01. Healthcare</li>
                  <li>02. Sports Complex</li>
                  <li>03. World-class Infrastructure</li>
                  <li>04. High Level Security</li>
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
                  Master Plan
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Rudn Enclave aspires to provide the people of Pakistan with a
                living experience of international standards. The project
                encompasses contemporary infrastructure, a luxurious ambiance,
                and exceptional amenities catering to every stratum of society.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                NESPAK has orchestrated the master plan of Rudn Enclave.
                Initially planned for 10,000 Kanal at the time of agreement
                signing, the township&apos;s expansiveness is far from
                diminutive, as developers continue to extend it to cover an area
                of 18,000 Kanal in the near future. This expansion is
                purportedly aimed at enhancing the land&apos;s value.
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
                  Payment Plan
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s"></p>
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
      </div>
    </section>
  );
};

export default AboutUs2;
