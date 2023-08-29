import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import Hero from "./hero";
import Intro from "./intro";
import Images from "./images";
import Footer from "../../components/Footer";

const Gallery = () => {
  return (
    <DarkTheme>
      <Navbar />
      <Hero />
      <Intro />
      <Images />
      <Footer />
    </DarkTheme>
  );
};

export default Gallery;
