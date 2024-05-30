import React, { useRef, useEffect, Suspense } from "react";

const LazyContactHeader = React.lazy(() =>
  import("../../components/Contact-header")
);
const LazyContactWithMap = React.lazy(() =>
  import("../../components/Contact-with-map")
);
const LazyNavbar = React.lazy(() => import("../../components/Navbar"));
const LazyFooter = React.lazy(() => import("../../components/Footer"));
const LazyDarkTheme = React.lazy(() => import("../../layouts/Dark"));

const Contact = () => {
  const fixedHeader = useRef(null);
  const MainContent = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fixedHeader.current) {
        const slidHeight = fixedHeader.current.offsetHeight;
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyDarkTheme>
        <LazyNavbar />
        <LazyContactHeader sliderRef={fixedHeader} />
        <div className="main-content" ref={MainContent}>
          <LazyContactWithMap />
        </div>
        <LazyFooter />
      </LazyDarkTheme>
    </Suspense>
  );
};

export default Contact;
