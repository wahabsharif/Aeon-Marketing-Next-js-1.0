/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Services5 = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <section className="simpl-intro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 md-mb50">
            <div className="img">
              <img src="/img/intro/b1.jpg" alt="" />
              <div className="vid-icon">
                <a className="vid" href="https://vimeo.com/127203262" onClick={(e) => {e.preventDefault(); setOpen(true);}}>
                  <div className="vid-butn">
                    <span className="icon">
                      <i className="fas fa-play"></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <div className="sub-title">
                <h6>Who We Are ?</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="mb-30 fw-700">Investing in <br /> the digital future.</h3>
              <p>Since its establishment in 2000, Avo Creative has been focusing on project management & implementation through cooperation.</p>
              <p>In total, Brook Creative has created more than 2000 projects related to constructional designing and landscaping worldwide.</p>
            </div>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && (
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="127203262"
            onClose={() => setOpen(false)}
          />
        )
      }
    </section>
  )
}

export default Services5