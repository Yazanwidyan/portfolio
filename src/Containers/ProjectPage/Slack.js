import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/Untitled-1.png";
import Fade from "react-reveal/Fade";

const Slack = () => {
  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
    <>
      {loading ? (
        <div className="loading-screen5">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
      ) : null}
      <div className="page-wrap">
        <nav className={visible ? "main-nav" : "main-nav scrolled"}>
          <div className="nav-content">
            <div className="nav-toggle2" onClick={handleMobileOpen}>
              <span className="menu-trigger">
                <i className="menu-trigger-bar top"></i>
                <i className="menu-trigger-bar middle"></i>
                <i className="menu-trigger-bar bottom"></i>
              </span>
            </div>
            <ul className="nav-links2">
              <li>
                <Link to="/">Turn Back Home</Link>
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
        <div className="projects-header5">
          <div className="title-section">
            <div className="projects-title">Slack-clone </div>
            <div className="projects-subtitle">
              {" "}
              business communication platform{" "}
            </div>
          </div>
          <div className="projects-details">
            <div className="project-role">
              {" "}
              <span style={{ color: "rgb(255 246 135)" }}>Role</span> Full-stack
              developer{" "}
            </div>
            <div className="project-context">
              <span style={{ color: "rgb(255 246 135)" }}>context</span> Website
              development{" "}
            </div>
            <div className="project-period">
              <span style={{ color: "rgb(255 246 135)" }}>Period</span> end 2020
            </div>
          </div>
        </div>
        <div
          className="projects-description"
          style={{ backgroundColor: "#3f0f40" }}
        >
          <Fade>
            <span className="desc-title">Introduction</span>
          </Fade>
          <Fade top>
            <span className="projects-desc">
              Slack is a proprietary business communication platform developed
              by American software company Slack Technologies. Slack offers many
              IRC-style features, including persistent chat rooms organized by
              topic, private groups, and direct messaging.
            </span>
          </Fade>
          <Fade>
            <a href="https://slack-clone-29ebc.web.app/">
              <button className="visit-website-btn">
                <span className="button-text">Visit Website </span>
                <span className=" button-icon">
                  <img className="arrow-logo" src={arrow} alt=""></img>
                </span>
                <div className="button-mask"></div>
              </button>
            </a>
          </Fade>
        </div>
        <div
          className="projects-description"
          style={{ backgroundColor: "#f3f3f3" }}
        >
          <Fade>
            <span className="desc-title" style={{ color: "#1c1d25" }}>
              About this project
            </span>
          </Fade>
          <Fade top>
            <span className="projects-desc" style={{ color: "#1c1d25" }}>
              On this project I was responsible for cloning UI/UX architecture,
              structure, design for the famous slack for businesses. also did
              the development process from scratch
            </span>
          </Fade>
          <Fade>
            <a href="https://github.com/Yazanwidyan/Slack-clone">
              <button className="visit-website-btn">
                <span className="button-text2">Source code </span>
                <span className=" button-icon">
                  <img className="arrow-logo" src={arrow} alt=""></img>
                </span>
                <div className="button-mask"></div>
              </button>
            </a>
          </Fade>
        </div>
        <Link to="/layls">
          <div className="next-projects">
            <span className="next-work-title">Next Work</span>
            <div className="next-work">
              Layls Website
              <img className="next-arrow" src={arrow} alt="dd" />
            </div>
          </div>
        </Link>
        <footer className="footer">
          <div className="content">
            <div className="inner-container">
              <ul className="footer-links">
                <li>
                  <a href="https://www.linkedin.com/in/yazan-widyan-863305157/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Yazanwidyan">Github</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/yazan.widyan/">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="footer-copy">
              &copy; 2020 Yazan Widyan - <a href="!#">contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Slack;
