import { useEffect } from 'react';
import Link from 'next/link';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skills from '../../data/sections/skills-circle.json';

const SkillsCircle2 = ({ theme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1218" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };

  useEffect(() => {
    document.querySelectorAll('.CircularProgressbar-text').forEach(el => el.classList.add('custom-font'));
  }, []);

  return (
    <section className="skills-circle section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <div className="sub-title">
                <h6>Amazing design services</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="mb-15 fw-700">Highly expertise with amazing design services.</h3>
              <p>We design brand, digital experience that engage the right customers.</p>
              <Link href={`/contact/contact-${theme}`}>
                <a className={`btn-curve ${theme === 'dark' ? 'btn-lit':''} mt-30 wow fadeInUp`} data-wow-delay=".5s">
                  <span>Discover Us</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="">
              <div className="row">
                {
                  skills.map((skill, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="item simpl wow fadeInLeft sm-mb50" data-wow-delay=".6">
                        <div className="skill" data-value={skill.value / 100 }>
                          <CircularProgressbar
                            value={skill.value}
                            strokeWidth={2}
                            text={`${skill.value}%`}
                            styles={cpStyle}
                          />
                        </div>
                        <div className="cont">
                          <h6>{ skill.title }</h6>
                          <p>{ skill.details }</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsCircle2