import dynamic from "next/dynamic";
import DarkTheme from "../../layouts/Dark";

// Dynamic import components
const Navbar = dynamic(() => import("../../components/Navbar"), { ssr: true });
const HomeHero = dynamic(() => import("./hero"), { ssr: true });
const CeoMessage = dynamic(() => import("./ceo-message"), { ssr: true });
const WhoWeAre = dynamic(() => import("./who-we-are"), { ssr: true });
const Features = dynamic(() => import("./features"), { ssr: true });
const Societies = dynamic(() => import("./societies"), { ssr: true });
const Testimonials = dynamic(() => import("./testimonials"), { ssr: true });
const CallToAction = dynamic(() => import("../../components/Call-to-action"), {
  ssr: true,
});
const PopupForm = dynamic(() => import("../../components/PopupForm"), {
  ssr: true,
});
const Footer = dynamic(() => import("../../components/Footer"), { ssr: true });

const Home = () => {
  return (
    <DarkTheme>
      <Navbar />
      <HomeHero />
      <CeoMessage />
      <WhoWeAre />
      <Features />
      <Societies />
      <Testimonials />
      <CallToAction />
      <PopupForm />
      <Footer />
    </DarkTheme>
  );
};

export default Home;
