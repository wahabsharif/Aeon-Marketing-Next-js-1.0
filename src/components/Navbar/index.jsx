/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import appData from "../../data/app.json";
import handleFullScreenNavbar from "../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}>
        <div className="container-fluid">
          <div className="logo">
            <Link href="/">
              {theme ? (
                theme === "light" ? (
                  <img src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img src={`${appData.lightLogo}`} alt="logo" />
              )}
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text text-2xl">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">02.</span>Societies
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/bahria-town-peshawar">
                              <a className="sub-link">
                                <span className="nm">01.</span>Bahria Town
                                Peshawar
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/citi-housing-peshawar">
                              <a className="sub-link">
                                <span className="nm">02.</span>Citi Housing
                                Peshawar
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/capital-valley">
                              <a className="sub-link">
                                <span className="nm">03.</span>Capital Valley
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/park-view-city">
                              <a className="sub-link">
                                <span className="nm">04.</span>Park View City
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/taj-residencia">
                              <a className="sub-link">
                                <span className="nm">05.</span>Taj Residencia
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/rudn-enclave">
                              <a className="sub-link">
                                <span className="nm">06.</span>Rudn Enclave
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/kingdom-valley">
                              <a className="sub-link">
                                <span className="nm">07.</span>Kingdom Valley
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/nmc-gujar-khan">
                              <a className="sub-link">
                                <span className="nm">08.</span>New Metro City
                                Gujar Khan
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/gallery">
                        <a className="link">
                          <span className="nm">03.</span>Gallery
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/contact">
                        <a className="link">
                          <span className="nm">04.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>
                    <a href="tel:+923465336367">+92 346 533-6367</a>
                  </p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                    Aeon Marketing, Ground floor office, Street 6, H-13,
                    Islamabad.
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="mailto:islamabadsmartproperties@gmail.com">
                      islamabadsmartproperties@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a
                    href="https://www.facebook.com/ISP006"
                    className="icon mx-3"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/aeonmarketingoffical/"
                    className="icon mx-3"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@aeonmarketing2913"
                    className="icon mx-3"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
