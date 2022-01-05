import React from "react";
import { ReactComponent as Goal } from "../../Assets/Icons/goal.svg";
import { ReactComponent as MprtarBoard } from "../../Assets/Icons/mortarboard.svg";
import { ReactComponent as Integration } from "../../Assets/Icons/integration.svg";
import { ReactComponent as Invention } from "../../Assets/Icons/invention.svg";
import { ReactComponent as Elevator } from "../../Assets/Icons/elevator.svg";
import { ReactComponent as Precision } from "../../Assets/Icons/precision.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="heading mb-5">
        <h1>Our Services</h1>
      </div>
      <div className="row justify-content-center height-550 mt-5">
        <div className="col-3">
          <div className="position-relative">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Goal />
              <h5>We Pioneer</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="position-relative">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <MprtarBoard />
              <h5>We Learn and Evolve</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="position-relative">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Integration />
              <h5>We embrace integrity</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center height-550 mt-5">
        <div className="col-3">
          <div className="position-relative">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Invention />
              <h5>We Pioneer</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="position-relative">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Elevator />
              <h5>We Learn and Evolve</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="position-relative">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Precision />
              <h5>We embrace integrity</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
