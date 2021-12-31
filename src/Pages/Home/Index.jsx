import React from "react";
import { ReactComponent as ArrowRight } from "../../Assets/Icons/arrow-right.svg";
import { ReactComponent as ArrowRightWhite } from "../../Assets/Icons/arrow-right-white.svg";
import TabsSection from "./TabsSection";
import Shubham from "../../Assets/shubham.png";
import BlockChain from "../../Assets/blockchain.png";
import Information from "./Information";
import Services from "./Services";

const Index = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="content">
          <h1>ADVANCE</h1>
          <h1>INOVATION</h1>
          <h3>END-TO-END CONSULTANCY & SOLUTION PROVIDER</h3>
          <div className="contact-us">
            <button className="">
              <ArrowRight className="arrow-right" />
              <span className="">Contact Us</span>
            </button>
          </div>
        </div>
      </section>
      {/* 
            TABS 
      */}
      <TabsSection />

      <section className="detail-section border">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content">
            <h3>
              Blockchain base <br />
              System
            </h3>
            <small>Dec 12,2021</small>
            <p>
              We challenge the status quo and adapt practices and solutions to
              tomorrow’s requirements We challenge the status quo and adapt
            </p>
            <div>
              <button>
                <ArrowRight />
              </button>
              <span>Read More</span>
            </div>
          </div>
          <img src={Shubham} alt="" />
        </div>
      </section>
      <section className="detail-section border">
        <div className="d-flex justify-content-center align-items-center">
          <img src={BlockChain} alt="" />
          <div className="content">
            <h3>
              Blockchain base <br />
              System
            </h3>
            <small>Dec 12,2021</small>
            <p>
              We challenge the status quo and adapt practices and solutions to
              tomorrow’s requirements We challenge the status quo and adapt
            </p>
            <div>
              <button>
                <ArrowRight />
              </button>
              <span>Read More</span>
            </div>
          </div>
        </div>
      </section>
      {/* 
            OTHER INFORMATION 
        */}
      <Information />
      {/* SERVICES */}

      <Services />
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
    </>
  );
};

export default Index;
