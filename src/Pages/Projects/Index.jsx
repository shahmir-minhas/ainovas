import React from "react";
import Sajad from "../../Assets/sajad.png";
import Ramon from "../../Assets/ramon.png";
import Aideal from "../../Assets/aideal.png";
import George from "../../Assets/george.png";
import Donald from "../../Assets/donald.png";
import Luka from "../../Assets/luka.png";
import { ReactComponent as ArrowRightWhite } from "../../Assets/Icons/arrow-right-white.svg";

const Index = () => {
  return (
    <>
      <div className="projects-wrapper">
        <div className="projects-wrapper__banner">
          <h1>Projects</h1>
        </div>
        <div className="projects-wrapper__content-cards">
          <p className="projects-discription">
            We challenge the status quo and adapt practices and solutions to
            tomorrow’s requirements We challenge the status quo and adapt
          </p>
          <div className="row">
            <div className="col-4">
              <div className="card ms-auto ">
                <div className="img-holder">
                  <img src={Sajad} alt="" />
                </div>
                <div className="card-content">
                  <h5>
                    Blockchain base <br />
                    System
                  </h5>
                  <p>
                    We challenge the status quo and adapt practices and
                    solutions to tomorrow’s requirements We challenge the status
                    quo and adapt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card mx-auto">
                <div className="img-holder">
                  <img src={Ramon} alt="" />
                </div>
                <div className="card-content">
                  <h5>
                    Blockchain base <br />
                    System
                  </h5>
                  <p>
                    We challenge the status quo and adapt practices and
                    solutions to tomorrow’s requirements We challenge the status
                    quo and adapt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card me-auto">
                <div className="img-holder">
                  <img src={Aideal} alt="" />
                </div>
                <div className="card-content">
                  <h5>
                    Blockchain base <br />
                    System
                  </h5>
                  <p>
                    We challenge the status quo and adapt practices and
                    solutions to tomorrow’s requirements We challenge the status
                    quo and adapt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-100">
            <div className="col-4">
              <div className="card ms-auto">
                <div className="img-holder">
                  <img src={George} alt="" />
                </div>
                <div className="card-content">
                  <h5>
                    Blockchain base <br />
                    System
                  </h5>
                  <p>
                    We challenge the status quo and adapt practices and
                    solutions to tomorrow’s requirements We challenge the status
                    quo and adapt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card mx-auto">
                <div className="img-holder">
                  <img src={Donald} alt="" />
                </div>
                <div className="card-content">
                  <h5>
                    Blockchain base <br />
                    System
                  </h5>
                  <p>
                    We challenge the status quo and adapt practices and
                    solutions to tomorrow’s requirements We challenge the status
                    quo and adapt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card me-auto">
                <div className="img-holder">
                  <img src={Luka} alt="" />
                </div>
                <div className="card-content">
                  <h5>
                    Blockchain base <br />
                    System
                  </h5>
                  <p>
                    We challenge the status quo and adapt practices and
                    solutions to tomorrow’s requirements We challenge the status
                    quo and adapt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="call-to-action">
          <h1>How can we help you ?</h1>
          <p>Get in touch with us</p>
          <div>
            <button>
              <ArrowRightWhite />
            </button>
            <span>Contact Us</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
