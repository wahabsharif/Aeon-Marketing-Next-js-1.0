import dynamic from "next/dynamic";
import React, { useRef, useEffect } from "react";

const About = dynamic(() => import("./about"));
const DetailSection = dynamic(() => import("./detail-section"));
const Footer = dynamic(() => import("../../components/Footer"));
const Navbar = dynamic(() => import("../../components/Navbar"));
const DarkTheme = dynamic(() => import("../../layouts/Dark"));
const Gallery = dynamic(() => import("./gallery"));
const Hero = dynamic(() => import("./hero"));
const PaymentPlan = dynamic(() => import("./payment-plan"));

const CitiHousingPeshawar = () => {
  const fixedSlider = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }
    }, 1000);

    return () => clearInterval(interval);
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

export default CitiHousingPeshawar;
