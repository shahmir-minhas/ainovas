import React from "react";
import { Tabs } from "antd";
import BlockChainImg from "../../Assets/blockchain.png";
import AnimatedButton from "./../../Components/Common/AnimatedButton";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

const TabsSection = () => {
  return (
    <section className="tabs-section border">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Technology" key="1">
          <div className="tab-content-wrapper d-flex justify-content-center align-items-center">
            <img src={BlockChainImg} alt="" />
            <div className="tab-content">
              <h3>
                Blockchain base <br />
                System
              </h3>
              <small>Dec 12,2021</small>
              <p>
                We challenge the status quo and adapt practices and solutions to
                tomorrow’s requirements We challenge the status quo and adapt
              </p>
              <Link to="details">
                <AnimatedButton className="secondary" />
              </Link>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Business" key="2">
          <div className="tab-content-wrapper d-flex justify-content-center align-items-center">
            <img src={BlockChainImg} alt="" />
            <div className="tab-content">
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
        </TabPane>
        <TabPane tab="Stock Market" key="3">
          <div className="tab-content-wrapper d-flex justify-content-center align-items-center">
            <img src={BlockChainImg} alt="" />
            <div className="tab-content">
              <h3>
                Blockchain base <br />
                Market
              </h3>
              <small>Dec 12,2021</small>
              <p>
                We Stock Mrket the status quo and adapt practices and solutions
                to tomorrow’s requirements We challenge the status quo and adapt
              </p>
              <AnimatedButton className="secondary" />
            </div>
          </div>
        </TabPane>
        <TabPane tab="Robotics" key="4">
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab="Cars" key="5">
          Content of Tab Pane 5
        </TabPane>
        <TabPane tab="Goods" key="6">
          Content of Tab Pane 6
        </TabPane>
      </Tabs>
    </section>
  );
};

export default TabsSection;
