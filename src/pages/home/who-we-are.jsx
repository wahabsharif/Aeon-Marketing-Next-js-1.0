/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../../components/Split";

const WhoWeAre = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/who-we-are.webp"
                alt="aeon-marketing-who-we-are"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Who We Are?
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Your Partner in Realizing Property Potential
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Trading Portfolio:
                  </h6>
                  <p>
                    Unlock value through strategic property transactions,
                    maximizing returns with our market insights.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Investment Management:
                  </h6>
                  <p>
                    Expertly navigate the real estate market, securing your
                    investments and fostering portfolio growth.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Property Appraisals:
                  </h6>
                  <p>
                    Accurate, comprehensive appraisals that reveal your
                    property&apos;s true market value, empowering informed
                    decisions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
