import React from "react";
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider2 from "../../components/Intro-with-slider2";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services2 from "../../components/Services2";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <DarkTheme>
      {/* <Navbar nr={navbarRef} lr={logoRef} /> */}
      <Navbar />
      <IntroWithSlider2 />
      <BlcSec />
      <Services2 />
      <VideoWithTestimonials />
      <SkillsCircle theme="dark" subBG />
      <PortfolioCustomColumn column={3} filterPosition="center" />
      <Clients1 theme="dark" subBG />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
