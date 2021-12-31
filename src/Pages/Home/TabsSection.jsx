import React from "react";
import { Tabs } from "antd";
import { ReactComponent as ArrowRight } from "../../Assets/Icons/arrow-right.svg";
import BlockChainImg from "../../Assets/blockchain.png";

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
              <div>
                <button>
                  <ArrowRight />
                </button>
                <span>Read More</span>
              </div>
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
              <div>
                <button>
                  <ArrowRight />
                </button>
                <span>Read More</span>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Stock Market" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Robotics" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Cars" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Goods" key="6">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </section>
    
  );
};

export default TabsSection;
