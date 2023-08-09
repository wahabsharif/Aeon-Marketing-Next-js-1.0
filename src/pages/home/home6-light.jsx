import { useRef, useEffect } from "react";
//= ================== Layout ==================//
import LightTheme from "../../layouts/Light";
//= ================== Components ==================//
import Navbar from "../../components/Navbar";
import Intro from "../../components/Intro-txt2";
import Features from "../../components/Features";
import ServicesTop from "../../components/Services5";
import Works from "../../components/Works3-slider";
import Skills from "../../components/Skills-circle2";
import ServicesBottom from "../../components/Services6";
import Testimonials from "../../components/Testimonials2";
import Clients from "../../components/Clients1";
import Blogs from "../../components/Blogs-three-column1";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
//= ================== Page Data ==================//
import appData from "../../data/app.json";

const Homepage6 = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });

    window.addEventListener("load", () => {
      document.body.classList.add('dark2');
      var slidHeight = document.querySelector('.fixed-slider').getBoundingClientRect().height;
      document.querySelector('.main-content').style.setProperty('margin-top', slidHeight + 'px');
    })
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro />
      <div className="main-content">
        <Features />
        <ServicesTop />
        <Works />
        <Skills theme="light" />
        <ServicesBottom />
        <Testimonials />
        <Clients theme="light" />
        <Blogs newHome subBG />
        <CallToAction theme="light" img="/img/pattern-light.png" />
        <Footer noSubBG />
      </div>
    </LightTheme>
  );
};

export default Homepage6;
