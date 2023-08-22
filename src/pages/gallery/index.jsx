import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import Hero from "./hero";
import Intro from "./intro";
import Images from "./images";
import Description from "./description";
import Video from "./video";
import Footer from "../../components/Footer";

const Gallery = () => {
  return (
    <DarkTheme>
      <Navbar />
      <Hero />
      <Intro />
      <Images />
      <Description />
      <Video
        videoBackground="/img/portfolio/project2/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      />
      <Footer />
    </DarkTheme>
  );
};

export default Gallery;
