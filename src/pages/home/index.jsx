import React from "react";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
import IntroWithSlider2 from "../../components/Intro-with-slider2";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import CeoMessage from "./ceo-message";
import WhoWeAre from "./who-we-are";
import Features from "./features";
import Societies from "./societies";
import Testimonials from "./testimonials";
import OurTeam from "./our-team";
import GoogleMap from "../../components/Google-Map";

const Home = () => {
  return (
    <DarkTheme>
      <Navbar />
      <IntroWithSlider2 />
      <CeoMessage />
      <OurTeam />
      <WhoWeAre />
      <Features />
      <Societies />
      <Testimonials />
      <CallToAction />
      <GoogleMap />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
