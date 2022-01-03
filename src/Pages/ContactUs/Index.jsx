import React, { Component } from "react";
import { ReactComponent as Email } from "../../Assets/Icons/mail.svg";
import { ReactComponent as Mobile } from "../../Assets/Icons/mobile.svg";

const Index = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__banner">
          <h1>Get in touch</h1>
        </div>
        <p className="contact__discription">
          Want's to get in touch ? we would love to hear from you. Here is how
          you can reach us
        </p>
        <div className="row">
          <div className="col-6">
            <div className="contact__card mr-60 ms-auto">
              <Mobile />
              <h4>Mobile</h4>
              <p>
                We challenge the status quo and adapt practices and solutions to
                tomorrow’s requirements
              </p>
              <p>+92 321 4567890</p>
            </div>
          </div>
          <div className="col-6">
            <div className="contact__card ml-60 me-auto">
              <Email />
              <h4>Email</h4>
              <p>
                We challenge the status quo and adapt practices and solutions to
                tomorrow’s requirements
              </p>
              <p>xyz321@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
