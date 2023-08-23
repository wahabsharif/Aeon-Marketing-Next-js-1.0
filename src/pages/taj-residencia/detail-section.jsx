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
                The location map of Taj Residencia positions it within a short
                drive from Islamabad, the nation&apos;s capital, in the vicinity
                of the twin cities. Moreover, the principal access point to this
                venture is via the interstate highway that interlinks the I-14
                and the I-15 sectors. The developers have dedicated a sprawling
                ten thousand kanals solely for this community. Presently, the
                sole route leading to the Society is through the I-14 connection
                path in Islamabad.
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
                The property&apos;s developers have strategically designed it to
                foster a strong sense of community by integrating adjacent parks
                and commercial zones, essentially creating a self-contained
                urban environment. Despite falling under the jurisdiction of the
                Rawalpindi Development Authority (RDA), the Society maintains
                its proximity to Islamabad. To access the construction site,
                motorists are required to utilize the I-14/I-15 interchange. The
                RDA has duly approved the NOC for Taj Residencia, encompassing
                an expansive 10,000 kanals of land. The builders have introduced
                an array of ready-to-occupy Dream Villas and homes, available in
                various sizes and locations within the Society.
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
                  Why Taj Residencia
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Creating the most serene environments and a lifestyle
                that&apos;s hard to replicate is a formidable task. What sets us
                apart is our comprehensive oversight of all project processes,
                ensuring the maintenance of our benchmark quality. Moreover, our
                company, Sardar Group of Companies, is renowned in Pakistan for
                curating and supervising luxurious lifestyles.
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
                The Society operates under the supervision of the RDA.
                What&apos;s even more encouraging for potential buyers is that
                the RDA has granted the Taj Residencia NOC, ensuring a secure
                proposition for purchasers. This authorization instills
                confidence in buyers to invest in high-quality property.
                Moreover, this neighborhood, with its endorsed NOC, boasts a
                strategic location and an array of advanced amenities and
                services. Allocating hard-earned funds to such endeavors
                promises buyers long-term financial security.
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
                  Amenities
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Society offers a comprehensive range of amenities, spanning from
                essential to luxurious, catering to all needs. The Sardar Group
                of Companies has fulfilled their commitment to create a lavish
                and extraordinary community, enriched with the countless
                advantages that modern art and innovation bring. Whether
                potential investors are seeking an investment opportunity or
                considering a new residence, the chance to acquire one of these
                exquisite dream villas should not be overlooked.
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
