import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import DarkTheme from "../../layouts/Dark";

// Define lazy-loaded components
const DynamicAbout = dynamic(() => import("./about"));
const DynamicDetailSection = dynamic(() => import("./detail-section"));
const DynamicFooter = dynamic(() => import("../../components/Footer"));
const DynamicNavbar = dynamic(() => import("../../components/Navbar"));
const DynamicGallery = dynamic(() => import("./gallery"));
const DynamicHero = dynamic(() => import("./hero"));
const DynamicPaymentPlan = dynamic(() => import("./payment-plan"));

const TajResidencia = () => {
  const fixedSlider = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fixedSlider.current) {
        const slidHeight = fixedSlider.current.offsetHeight;
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [fixedSlider, MainContent]);

  return (
    <DarkTheme>
      <DynamicNavbar nr={navbarRef} lr={logoRef} />
      <DynamicHero sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <DynamicAbout />
        <DynamicGallery />
        <DynamicDetailSection />
        <DynamicPaymentPlan />
        <DynamicFooter />
      </div>
    </DarkTheme>
  );
};

export default TajResidencia;
