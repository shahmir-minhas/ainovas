import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/Icons/logo.svg";
const Layout = () => {
  return (
    <nav className="topbar d-flex justify-content-between align-items-center">
      <Logo className="logo" />
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
  );
};

export default Layout;
