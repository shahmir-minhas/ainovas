import React from "react";

const AnimatedButton = ({ className }) => {
  console.log(className);
  return (
    <button
      className={`d-flex justify-content-center align-items-center animated-button-${
        className ? className : "primary"
      }`}
    ></button>
  );
};

export default AnimatedButton;
