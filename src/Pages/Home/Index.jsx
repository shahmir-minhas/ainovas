import React from "react";
import TabsSection from "./TabsSection";
import Shubham from "../../Assets/shubham.png";
import BlockChain from "../../Assets/blockchain.png";
import Information from "./Information";
import Services from "../../Components/Common/Services";
import CallToAction from "./../../Components/Common/CallToACtion";
import AnimatedButton from "../../Components/Common/AnimatedButton";
import { ReactComponent as AnimatedLogo } from "../../Assets/Icons/background-logo.svg";
const Index = () => {
  return (
    <div className="home">
      <AnimatedLogo className="animated-logo" />
      <section className="hero-wrapper">
        <div className="content">
          <h1>ADVANCE</h1>
          <h1>INOVATION</h1>
          <h3>END-TO-END CONSULTANCY & SOLUTION PROVIDER</h3>
          <AnimatedButton className="primary" />
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
              <AnimatedButton className="secondary" />
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
            <AnimatedButton className="secondary" />
          </div>
        </div>
      </section>
      {/* 
            OTHER INFORMATION 
        */}
      <Information />
      {/* SERVICES */}

      <Services />

      <CallToAction />
    </div>
  );
};

export default Index;
