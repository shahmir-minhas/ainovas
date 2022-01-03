import React, { Component } from "react";
import { ReactComponent as ArrowRight } from "../../Assets/Icons/arrow-right.svg";

const AnimatedButton = ({ className }) => {
  console.log(className);
  return (
    <button
      className={`d-flex justify-content-center align-items-center animated-button-${className}`}
    >
    </button>
  );
};

export default AnimatedButton;
