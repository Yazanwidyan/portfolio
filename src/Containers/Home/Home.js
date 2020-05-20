import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import Card from "../../Components/Parallax/Parallax";
import arrow from "../../Assets/Images/Untitled-1.png";
import logo from "../../Assets/Images/ddd.png";
// import logo2 from "../../Assets/Images/Logo.png";

const Home = () => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleContactOpen = () => {
    setOpen(!open);

    if (!open) {
      document.body.classList.add("is-open");
    } else {
      document.body.classList.remove("is-open");
    }
  };

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
      document.body.classList.add("is-mobile-open");
    } else {
      document.body.classList.remove("is-mobile-open");
    }
  };

  const handleScroll = () => {
    const currentPos = window.pageYOffset;
    const visible = scrollPos < 150;

    setScroll(currentPos);
    setVisible(visible);
  };

  return (
    <div className="page-wrap">
      <nav className={visible ? "main-nav" : "main-nav scrolled"}>
        <div className="nav-content">
          <a href>{/* <img className="logo" src={logo2} alt=""></img> */}</a>
          <div className="nav-toggle" onClick={handleMobileOpen}>
            <span className="menu-trigger">
              <i className="menu-trigger-bar top"></i>
              <i className="menu-trigger-bar middle"></i>
              <i className="menu-trigger-bar bottom"></i>
            </span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="!#">Projects</a>
            </li>
            <li>
              <a onClick={handleContactOpen} href>
                Skills
              </a>
            </li>
            <li>
              <a onClick={handleContactOpen} href>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile-menu">
        <span className="close-trigger" onClick={handleMobileOpen}>
          <i className="close-trigger-bar left"></i>
          <i className="close-trigger-bar right"></i>
        </span>
        <ul className="mobile-nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href onClick={handleContactOpen}>
              Skills
            </a>
          </li>
          <li>
            <a href>Work</a>
          </li>
          <li>
            <a href onClick={handleContactOpen}>
              Contact{" "}
            </a>
          </li>
        </ul>
      </nav>

      <header className="main-hero">
        <div className="main-hero-text">
          <div className="content">
            <div className="hero-name">
              <h1 className="lg-head">Y</h1>
              <h1 className="lg-head">a</h1>
              <h1 className="lg-head">z</h1>
              <h1 className="lg-head">a</h1>
              <h1 className="lg-head">n</h1>
              <h1 className="lg-head">W</h1>
              <h1 className="lg-head">i</h1>
              <h1 className="lg-head">d</h1>
              <h1 className="lg-head">y</h1>
              <h1 className="lg-head">a</h1>
              <h1 className="lg-head">n</h1>
            </div>
            <h3 className="sm-heading"> Interactive Front-end Developer </h3>

            <button className="the-button" onClick={handleContactOpen}>
              <span className="button-text">About Me</span>
              <div className="button-mask"></div>
              <span className=" button-icon">
                <img className="arrow-logo" src={arrow} alt=""></img>
              </span>
            </button>

            <ul className="icons">
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#!">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "28%",
            left: "43%",
            width: "20vh",
            opacity: ".7",
          }}
          src={logo}
          alt=""
        ></img>
        <Card />

        <a href="#!" className="go-next-works">
          <div>Works</div>
          <span className="the-arrow"></span>
        </a>
      </header>
      <div className="main">
        <div className="work-section">
          <div className="content">
            <h4 className="work-title">CASE STUDIES </h4>
            <h2 className="work-subtitle"> Latest Works </h2>
            <ul className="work-list">
              <li className="project1-li">
                <a id="project1" href="!#" className="project">
                  <div className="project-mask"> </div>
                  <div id="project-number-1" className="project-mask-number">
                    <div className="project-mask-back"> 01 </div>
                    <div className="project-mask-front">
                      <div data-index="01" className="project-mask-overlay">
                        01
                      </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title"> Layls Website </div>
                    <div className="project-subtitle">
                      {" "}
                      Dresses and Clothes Website{" "}
                    </div>
                    <button className="the-button">
                      <span className="button-text">View More </span>
                      <span className=" button-icon">
                        <img className="arrow-logo" src={arrow} alt=""></img>
                      </span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </a>
              </li>
              <li className="project2-li">
                <a id="project2" href="!#" className="project">
                  <div className="project-mask"> </div>
                  <div id="project-number-2" className="project-mask-number">
                    <div className="project-mask-back"> 02 </div>
                    <div className="project-mask-front">
                      <div data-index="02" className="project-mask-overlay">
                        01
                      </div>
                    </div>
                  </div>
                  <div className="work-text-section">
                    <div className="project-title"> Duplicat Nike Website </div>
                    <div className="project-subtitle">
                      {" "}
                      Amazing Multifunctioning Website{" "}
                    </div>
                    <button className="the-button">
                      <span className="button-text">View More</span>
                      <span className=" button-icon">
                        <img className="arrow-logo" src={arrow} alt=""></img>
                      </span>
                      <div className="button-mask"></div>
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={open ? "is-open" : ""}>
          <div className="contact-about">
            <div className="half-contact is-contact">
              <div className="giga-text" style={{ right: "-2vh" }}>
                Skills
              </div>

              <div className="skills-container">
                <ul>
                  <li className="html"> HTML</li>
                  <li className="css"> CSS</li>
                  <li className="javascript"> JAVASCRIPT</li>
                  <li className="react"> REACT</li>
                  <li className="redux"> REDUX</li>
                </ul>
              </div>

              <div className="contact-info">
                <div className="close-contact" onClick={handleContactOpen}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="half-contact is-about">
              <div className="giga-text">About</div>
              <div className="contact-info">
                <h3 className="about-me-title">About Me</h3>
                <h4>Interactive Front-end developer.</h4>
                <p className="about-me-text">
                  I'm Yazan Widyan, a 26-year-old Jordanian
                  <strong> Freelance Front-end developer</strong>. I'm a guy who
                  likes making weird things with web technologies.
                  <br /> I like to <strong>Resolve</strong> design problems,
                </p>

                <div className="boxes">
                  <div>
                    <span className="text-secondary"> Email: </span>
                    yazanwidyan07@gmail.com
                  </div>
                  <div>
                    <span className="text-secondary"> Phone: </span>
                    +962 79 538 21 71
                  </div>
                  <div>
                    <span className="text-secondary"> Address: </span>
                    Amman, Mecca st.
                  </div>
                </div>
                <div
                  className="giga-text"
                  style={{ top: "43vh", left: "-15vh", zIndex: "-1" }}
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="content">
          <div className="inner-container">
            <ul className="footer-links">
              <li>
                <a href="!#">Twitter</a>
              </li>
              <li>
                <a href="!#">Linkedin</a>
              </li>
              <li>
                <a href="!#">Github</a>
              </li>
              <li>
                <a href="!#">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="footer-copy">
            &copy; 2020 Yazan Widyan - <a href="!#">contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
