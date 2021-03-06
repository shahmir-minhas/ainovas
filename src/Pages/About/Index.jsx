import React, { Component } from "react";
import Verne from "../../Assets/verne.png";
import Services from "./../../Components/Common/Services";
import CallToAction from "./../../Components/Common/CallToACtion";

const Index = () => {
  return (
    <section className="about">
      <div className="about__banner">
        <h1>About</h1>
      </div>
      <div className="about__discription">
        <h1>We are Advance Inovation</h1>
        <p>
          We challenge the status quo and adapt practices and solutions to
          tomorrow’s
          <br /> requirements We challenge the status
          <br /> quo and adapt
        </p>
      </div>
      <div className="about__counter row">
        <div className="col-2">
          <h1>200+</h1>
          <p>Customer</p>
        </div>
        <div className="col-2">
          <h1>120</h1>
          <p>Office</p>
        </div>
        <div className="col-2">
          <h1>85</h1>
          <p>Staff</p>
        </div>
        <div className="col-2">
          <h1>20+</h1>
          <p>Projects</p>
        </div>
      </div>
      <div className="img-banner"></div>
      <div className="discription-section row justify-content-center">
        <h4>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br />
          diam nonummy nibh euismod
        </h4>
        <p className="col-9">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="difference-section">
        <h2>Difference in working with us</h2>
        <div className="row justify-content-center">
          <div className="col-5">
            <ul className="list-unstyled text-start">
              <li>
                <p className="fw-bold">&#8250;</p>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </li>
              <li>
                <p className="fw-bold">&#8250;</p>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </li>
              <li>
                <p className="fw-bold">&#8250;</p>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <ul className="list-unstyled text-start">
              <li>
                <p className="fw-bold">&#8250;</p>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </li>
              <li>
                <p className="fw-bold">&#8250;</p>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </li>
              <li>
                <p className="fw-bold">&#8250;</p>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 
        Services 
      */}
      <Services />

      {/* 
        call to action  
     */}
      <CallToAction />
    </section>
  );
};

export default Index;
