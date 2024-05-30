import dynamic from "next/dynamic";

const DynamicDarkTheme = dynamic(() => import("../../layouts/Dark"));
const DynamicNavbar = dynamic(() => import("../../components/Navbar"));
const DynamicHero = dynamic(() => import("./hero"));
const DynamicIntro = dynamic(() => import("./intro"));
const DynamicImages = dynamic(() => import("./images"));
const DynamicFooter = dynamic(() => import("../../components/Footer"));

const Gallery = () => {
  return (
    <DynamicDarkTheme>
      <DynamicNavbar />
      <DynamicHero />
      <DynamicIntro />
      <DynamicImages />
      <DynamicFooter />
    </DynamicDarkTheme>
  );
};

export default Gallery;
