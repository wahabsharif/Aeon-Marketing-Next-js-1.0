import React, { useEffect, useState } from "react";
import introData from "../../data/home/hero.json";

// Function to preload images
const preloadImage = (url) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = url;
  document.head.appendChild(link);
};

const HomeHero = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    introData.forEach((slide) => preloadImage(slide.image));
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  const heroSectionStyle = {
    position: "relative",
    overflow: "hidden",
    height: "100vh",
  };

  const bgImgStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  };

  const captionStyle = {
    textAlign: "center",
    color: "#fff",
  };

  const tlineStyle = {
    marginTop: "10px",
    fontSize: "1.5rem",
  };

  const socialIconStyle = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
  };

  const iconStyle = {
    color: "#fff",
    marginLeft: "10px",
    fontSize: "1.5rem",
    textDecoration: "none",
  };

  return (
    <header style={heroSectionStyle}>
      {!load && introData.length > 0 ? (
        <div
          style={{
            ...bgImgStyle,
            backgroundImage: `url(${introData[0].image})`,
          }}
          data-overlay-dark="6"
        >
          {/* <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div style={captionStyle}>
                  <h1>
                    {typeof introData[0].title === "object" ? (
                      <>
                        {introData[0].title.first}
                        <div style={tlineStyle}>
                          {introData[0].title.second}
                        </div>
                      </>
                    ) : (
                      introData[0].title
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      ) : null}

      {!load && (
        <div style={socialIconStyle}>
          <a href="https://www.facebook.com/ISP006" style={iconStyle}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/aeonmarketingoffical/"
            style={iconStyle}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@aeonmarketing2913"
            style={iconStyle}
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      )}
    </header>
  );
};

export default HomeHero;
