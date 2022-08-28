import React, { useState } from "react";
import "./Navbar.css";

//motion import
import { motion } from "framer-motion";

//logo text animation
const logo_txt_animation = {
  hidden: {
    y: -100,
  },
  visible: {
    y: -1,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 120,
    },
  },
};

//main function
function Navbar() {
  const [navbar, setNavbar] = useState(false);

  //MenuClick
  const MenuClick = () => {
    var get_hamburger_div = document.querySelector(".hamburger");
    get_hamburger_div.classList.toggle("is-active");
  };

  //logo varaible
  let logo_txt = "<Sameeullah />";

  //changing bg by scroll
  const change_bg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", change_bg);


  //return statement
  return (
    <div>
      <nav
        className={
          navbar
            ? "mb-0 navbar  navbar-expand-lg navbar-dark deep-purple darken-4 fixed-top scrolling-navbar  blue-text pt-4 pb-4 z-depth-0"
            : "mb-0 navbar navbar-expand-lg navbar-dark  darken-3 fixed-top scrolling-navbar  blue-text pt-4 pb-4 z-depth-0"
        }
        id="navmain"
        style={{ color: "black" }}
      >
        <div className="container">
          <motion.a
            variants={logo_txt_animation}
            initial="hidden"
            animate="visible"
            exact="true"
            href="/"
            className="navbar-brand pl-lg-4 logo_text"
          >
            {logo_txt}
          </motion.a>
          {/* <div
            className="hamburger hamburger--collapse-r navbar-toggler"
            style={{ verticalAlign: "middle" }}
            onClick={MenuClick}
          >
            <div
              class="hamburger-box"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-333"
              aria-controls="navbarSupportedContent-333"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div class="hamburger-inner"></div>
            </div>
          </div> */}
           <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-333"
              aria-controls="navbarSupportedContent-333"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-333"
          >
            <ul className="navbar-nav m-auto chk">
              <li className="nav-item ">
                <a exact="true" href="/" className="nav-link  home">
                  Home
                </a>
              </li>
              <li className="nav-item  pl-xl-4 pl-lg-4">
                <a exact="true" href="/about" className="nav-link about">
                  About
                </a>
              </li>

              <li className="nav-item pl-xl-4 pl-lg-4">
                <a exact="true" href="/team" className="nav-link  news">
                  Services
                </a>
              </li>
              <li className="nav-item pl-xl-4 pl-lg-4">
                <a exact="true" href="/contact" className="nav-link  contact">
                  Portfolio
                </a>
              </li>
              <li className="nav-item pl-xl-4 pl-lg-4">
                <a exact="true" href="/contact" className="nav-link  contact">
                  Blog
                </a>
              </li>

              <li className="nav-item pl-xl-4 pl-lg-4">
                <a
                  exact="true"
                  href="/join"
                  className="nav-link   signup"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
