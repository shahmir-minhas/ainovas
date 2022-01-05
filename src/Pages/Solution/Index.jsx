import React from "react";
import { ReactComponent as Strategy } from "../../Assets/Icons/Strategy.svg";
import { ReactComponent as Analytics } from "../../Assets/Icons/Analytics.svg";
import { ReactComponent as Commerce } from "../../Assets/Icons/Commerce.svg";
import { ReactComponent as People } from "../../Assets/Icons/People.svg";
import { ReactComponent as Outsourcing } from "../../Assets/Icons/Outsourcing.svg";
import { ReactComponent as GreaterThen } from "../../Assets/Icons/ic_code_24px.svg";
import CallToAction from "./../../Components/Common/CallToACtion";
const Index = () => {
  return (
    <section className="solution">
      <div className="solution__banner">
        <h1>Solutions</h1>
      </div>
      <div className="experiance-section">
        <h1>EXTENSIVE EXPERIENCE AND EXPERTISE</h1>
        <div className="row justify-content-around text-start">
          <div className="col-4">
            <h4>Digital Transformation & Automation</h4>
            <div className="d-flex">
              <div className="text-center mr-60">
                <Strategy />
                <p>Strategy</p>
              </div>
              <div className="text-center mr-60">
                <Analytics />
                <p>Analytics</p>
              </div>
              <div className="text-center mr-60">
                <Commerce />
                <p>Commerce</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h4>Digital Transformation & Automation</h4>
            <div className="d-flex">
              <div className="text-center mr-60">
                <People />
                <p>People</p>
              </div>
              <div className="text-center mr-60">
                <Outsourcing />
                <p>Outsourcing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="digital-transformation text-start">
        <h2 className="pl-200">Digital Transformation & Automation</h2>
        <div className="row  background-img-primary">
          <div className="col-7 pl-200">
            <ul className="list-unstyled text-start">
              <li>
                <h4>Strategy</h4>
              </li>
              <li>
                <GreaterThen className="gt-icon" />

                <p>
                  Working hand-in-hand with our clients to transform strategies
                  into tangible improvements
                </p>
              </li>
              <li>
                <GreaterThen className="gt-icon" />
                <p>Bringing the best out of people and organizations</p>
              </li>
            </ul>

            <ul className="list-unstyled text-start">
              <li>
                <h4>Analytics</h4>
              </li>
              <li>
                <GreaterThen className="gt-icon" />

                <p>
                  Working hand-in-hand with our clients to transform strategies
                  into tangible improvements
                </p>
              </li>
              <li>
                <GreaterThen className="gt-icon" />
                <p>Bringing the best out of people and organizations</p>
              </li>
            </ul>

            <ul className="list-unstyled text-start">
              <li>
                <h4>Commerce</h4>
              </li>
              <li>
                <GreaterThen className="gt-icon" />

                <p>
                  Working hand-in-hand with our clients to transform strategies
                  into tangible improvements
                </p>
              </li>
              <li>
                <GreaterThen className="gt-icon" />
                <p>Bringing the best out of people and organizations</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="row background-img-secondary mt-5 justify-content-end">
          <div className="col-7 pr-178 pt-180">
            <h2>Digital Operation</h2>
            <ul className="list-unstyled text-start">
              <li>
                <h4>People</h4>
              </li>
              <li>
                <GreaterThen className="gt-icon" />

                <p>
                  Working hand-in-hand with our clients to transform strategies
                  into tangible improvements
                </p>
              </li>
              <li>
                <GreaterThen className="gt-icon" />
                <p>Bringing the best out of people and organizations</p>
              </li>
            </ul>

            <ul className="list-unstyled text-start">
              <li>
                <h4>Outsourcing</h4>
              </li>
              <li>
                <GreaterThen className="gt-icon" />

                <p>
                  Working hand-in-hand with our clients to transform strategies
                  into tangible improvements
                </p>
              </li>
              <li>
                <GreaterThen className="gt-icon" />
                <p>Bringing the best out of people and organizations</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CallToAction />
    </section>
  );
};

export default Index;
