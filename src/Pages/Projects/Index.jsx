import React from "react";
import Sajad from "../../Assets/sajad.png";
import Ramon from "../../Assets/ramon.png";
import Aideal from "../../Assets/aideal.png";
import George from "../../Assets/george.png";
import Donald from "../../Assets/donald.png";
import Luka from "../../Assets/luka.png";
import CallToAction from "./../../Components/Common/CallToACtion";

const Index = () => {
  return (
    <section className="projects-wrapper">
      <div className="projects-wrapper__banner">
        <h1>Projects</h1>
      </div>
      <div className="projects-wrapper__content-cards">
        <p className="projects-discription">
          We challenge the status quo and adapt practices and solutions to
          tomorrow’s requirements We challenge the status quo and adapt
        </p>
        <div className="row">
          <div className="col-4 p-c-l">
            <div className="card">
              <div className="img-holder">
                <img src={Sajad} alt="" />
              </div>
              <div className="card-content">
                <h5>
                  Blockchain base <br />
                  System
                </h5>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-50">
            <div className="card">
              <div className="img-holder">
                <img src={Ramon} alt="" />
              </div>
              <div className="card-content ">
                <h5>
                  Blockchain base <br />
                  System
                </h5>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-c-r">
            <div className="card">
              <div className="img-holder">
                <img src={Aideal} alt="" />
              </div>
              <div className="card-content">
                <h5>
                  Blockchain base <br />
                  System
                </h5>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-c-l">
            <div className="card">
              <div className="img-holder">
                <img src={George} alt="" />
              </div>
              <div className="card-content">
                <h5>
                  Blockchain base <br />
                  System
                </h5>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-50">
            <div className="card">
              <div className="img-holder">
                <img src={Donald} alt="" />
              </div>
              <div className="card-content">
                <h5>
                  Blockchain base <br />
                  System
                </h5>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-c-r">
            <div className="card">
              <div className="img-holder">
                <img src={Luka} alt="" />
              </div>
              <div className="card-content">
                <h5>
                  Blockchain base <br />
                  System
                </h5>
                <p>
                  We challenge the status quo and adapt practices and solutions
                  to tomorrow’s requirements We challenge the status quo and
                  adapt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default Index;
