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
      <div className="d-flex justify-content-center height-550 mt-5 flex-sm-wrap">
        <div className="flex-1">
          <div className="position-relative triangle-card ms-auto">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Goal className="tri-icon" />
              <h5>We Pioneer</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="position-relative triangle-card mx-auto">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <MprtarBoard className="tri-icon" />
              <h5>We Learn and Evolve</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="position-relative triangle-card me-auto">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Integration className="tri-icon" />
              <h5>We embrace integrity</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center height-550 mt-5 flex-sm-wrap">
        <div className="flex-1">
          <div className="position-relative triangle-card ms-auto">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Invention className="tri-icon" />
              <h5>We Pioneer</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="position-relative triangle-card mx-auto">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Elevator className="tri-icon" />
              <h5>We Learn and Evolve</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="position-relative triangle-card me-auto">
            <div className="triangle"></div>
            <div className="services__card position-absolute top-0">
              <Precision className="tri-icon" />
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
