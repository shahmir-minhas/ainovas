import React from "react";
import AnimatedButton from "./AnimatedButton";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h1>How can we help you ?</h1>
      <p>Get in touch with us</p>
      <AnimatedButton className="ternary contact-content-white" />
    </section>
  );
};

export default CallToAction;
