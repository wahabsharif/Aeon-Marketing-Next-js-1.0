/* eslint-disable @next/next/no-img-element */
import React from "react";

const Images = () => {
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-3 pr-0">
              <a href="">
                <img alt="" src="/img/gallery/gallery-1.webp" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="">
                <img alt="" src="/img/gallery/gallery-2.webp" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="">
                <img alt="" src="/img/gallery/gallery-3.webp" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="">
                <img alt="" src="/img/gallery/hero-img.webp" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="">
                <img alt="" src="/img/gallery/gallery-4.webp" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="">
                <img alt="" src="/img/gallery/gallery-6.webp" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="">
                <img alt="" src="/img/gallery/gallery-7.webp" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="">
                <img
                  alt=""
                  src="/img/capital-valley/gallery-1-(1920x2715).webp"
                />
              </a>
            </div>
            <div className="col-12">
              <a href="">
                <img
                  alt=""
                  src="/img/award-gallery-1.webp"
                  className="big-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
