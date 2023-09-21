/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../components/Split";
import "react-circular-progressbar/dist/styles.css";

const CeoMessage = ({ skillsTheme }) => {
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
          <div className="col-12 text-center my-5">
            <Split>
              <h1
                className="co-tit custom-font wow words chars splitting"
                data-splitting
              >
                Chairman Message
              </h1>
              <h4
                className="co-tit custom-font wow words chars splitting"
                data-splitting
              >
                Faheem Awan
                <br />
                CEO, Aeon Marketing Pvt. Ltd.
              </h4>
            </Split>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/faheem.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Our journey is guided by a steadfast commitment to dynamic
                growth and unwavering excellence. As the CEO of this remarkable
                venture. With over 7 years of invaluable experience in real
                estate trading, I stand as a testament to the power of
                dedication and innovation.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Throughout my professional odyssey, I have witnessed the
                ever-evolving landscape of the real estate industry. It&apos;s a
                realm where adaptability is key and foresight is paramount.
                These principles have been the cornerstones of my approach. I
                firmly believe that true success stems from a fusion of
                strategic planning, diligent execution, and a relentless pursuit
                of excellence.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Our team at Aeon Marketing Pvt. Ltd. is not just a workforce;
                we&apos;re a collective of passionate individuals united by a
                common goal - to redefine the possibilities within real estate.
                We embrace challenges as opportunities, and we understand that
                each transaction is a chance to make a positive impact on lives
                and communities.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                As we steer towards the future, we remain dedicated to upholding
                the highest standards of integrity, transparency, and
                customer-centricity. Our clients place their trust in us, and
                it&apos;s a responsibility we hold with utmost reverence. By
                leveraging our insights, experience, and cutting-edge
                strategies, we aim to continue exceeding expectations and
                setting new industry benchmarks.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                I invite you to embark on this journey of innovation and growth
                with us. Whether you&apos;re a potential client, a partner, or a
                member of our team, your aspirations are integral to our vision.
                Let&apos;s collectively shape a tomorrow that&apos;s defined by
                progress, excellence, and transformative real estate
                experiences. Thank you for choosing Aeon Marketing Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
