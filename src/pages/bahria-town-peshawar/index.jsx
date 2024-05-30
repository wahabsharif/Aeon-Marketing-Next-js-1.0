import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import DarkTheme from "../../layouts/Dark";

// Define lazy-loaded components
const DynamicAbout = dynamic(() => import("./about"));
const DynamicDetailSection = dynamic(() => import("./detail-section"));
const DynamicFooter = dynamic(() => import("../../components/Footer"));
const DynamicNavbar = dynamic(() => import("../../components/Navbar"));
const DynamicGallery = dynamic(() => import("./gallery"));
const DynamicHero = dynamic(() => import("./hero"));

const BahriaTownPeshawar = () => {
  const fixedSlider = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const [slidHeight, setSlidHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fixedSlider.current) {
        setSlidHeight(fixedSlider.current.offsetHeight);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [fixedSlider]);

  return (
    <DarkTheme>
      <React.Suspense fallback={<div>Loading...</div>}>
        <DynamicNavbar nr={navbarRef} lr={logoRef} />
        <DynamicHero sliderRef={fixedSlider} />
        <div ref={MainContent} className="main-content">
          <DynamicAbout />
          <DynamicGallery />
          <DynamicDetailSection />
          <DynamicFooter />
        </div>
      </React.Suspense>
    </DarkTheme>
  );
};

export default BahriaTownPeshawar;
