import React, { Component } from "react";
import { ReactComponent as ArrowRightWhite } from "../../Assets/Icons/arrow-right-white.svg";
import AnimatedButton from './AnimatedButton';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h1>How can we help you ?</h1>
      <p>Get in touch with us</p>
      <AnimatedButton className='ternary'/>
    </section>
  );
};

export default CallToAction;
