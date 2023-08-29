import React from "react";
import About from "./about";
import DetailSection from "./detail-section";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import Gallery from "./gallery";
import Hero from "./hero";
import PaymentPlan from "./payment-plan";

const Homepage4 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedSlider, MainContent]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Hero sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <About />
        <Gallery />
        <DetailSection />
        <PaymentPlan />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage4;
