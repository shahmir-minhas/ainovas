import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/Icons/logo.svg";
import { ReactComponent as Twitter } from "../Assets/Icons/twitter.svg";
import { ReactComponent as Facebook } from "../Assets/Icons/facebook.svg";
import { ReactComponent as Linkedin } from "../Assets/Icons/linkedin.svg";
import { ReactComponent as Dribble } from "../Assets/Icons/dribble.svg";
import { ReactComponent as Dropbox } from "../Assets/Icons/dropbox.svg";

const Layout = ({ children }) => {
  return (
    <main>
      <nav className="topbar d-flex justify-content-between align-items-center">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div>
          <ul className="d-flex list-unstyled m-0">
            <li>
              <NavLink to="/" className="navigation">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navigation ">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/solution" className="navigation ">
                SOLUTION
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navigation">
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="navigation">
                PROJECTS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <footer className="footer">
        <div className="footer__top-bar d-flex">
          <div className="text-start">
            <Logo className="logo" />
            <div className="mt-5">
              <Twitter className="me-3" />
              <Facebook className="me-3" />
              <Linkedin className="me-3" />
              <Dribble className="me-3" />
              <Dropbox />
            </div>
          </div>
          <div className="d-flex">
            <ul className="">
              <li>
                <h4>Quick Links</h4>
              </li>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/">VALUES</Link>
              </li>
              <li>
                <Link to="/">SOLUTIONS</Link>
              </li>
              <li>
                <Link to="/">CAPABILITIES</Link>
              </li>
              <li>
                <Link to="/">PROJECTS</Link>
              </li>
            </ul>
            <ul className="">
              <li>
                <h4>Contact Us</h4>
              </li>
              <li>+923122245679</li>
              <li>+923122245679</li>
              <li>xyz123@gmail.com</li>
            </ul>
            <ul className="">
              <li>
                <h4>Location</h4>
              </li>
              <li>
                Lorem ipsum dolor sit amet,
                <br /> consetetur sadipscing elitr,
                <br /> sed diam nonumy eirmod
                <br /> tempor invidunt ut labore
                <br /> et dolore magna
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom-bar">
          <p>Copyrights © 2021 AINOVAS All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
