import React, { Component } from "react";
import { ReactComponent as ArrowRightWhite } from "../../Assets/Icons/arrow-right-white.svg";
import RightImg from "../../Assets/right-img.png";
import AnimatedButton from './../../Components/Common/AnimatedButton';

const Information = () => {
  return (
    <section className="information-section">
      <div className="heading">
        <h1>Other information</h1>
      </div>
      <div className="row">
        <div className="col-6 p-0">
          <div className="info-box">
            <h5>Demo Text</h5>
            <p>
              We challenge the status quo and adapt practices and solutions to
              tomorrow’s requirements We challenge the status quo and adapt
            </p>
            <AnimatedButton className='ternary'/>
          </div>
        </div>
        <div className="col-6 p-0">
          <div className="info-box">
            <h5>Demo Text</h5>
            <p>
              We challenge the status quo and adapt practices and solutions to
              tomorrow’s requirements We challenge the status quo and adapt
            </p>
            <AnimatedButton className='ternary'/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-0">
          <div className="info-box-secondary d-flex">
            <div className="info-box-secondary__content-one">
              <h5>Demo Text</h5>
              <span>Dec 12,2021</span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et
              </p>
            </div>
            <img src={RightImg} alt="" className="info-box-img" />
          </div>
        </div>
        <div className="col-6 p-0">
          <div className="info-box-secondary d-flex">
            <img src={RightImg} alt="" className="info-box-img" />
            <div className="info-box-secondary__content-two">
              <h5>Demo Text</h5>
              <span>Dec 12,2021</span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
