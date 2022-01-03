import React, { Component } from "react";
import { ReactComponent as ArrowRightWhite } from "../../Assets/Icons/arrow-right-white.svg";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
