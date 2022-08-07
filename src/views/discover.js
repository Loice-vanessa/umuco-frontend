import React from "react";
// import "./learn.css";

import photo from "../assets/images/learn.jfif";
import "antd/dist/antd.css";
// import './index.css';
import { Card } from "antd";
import Footer from "../components/Footer";
const discover = () => {
  return (
    <>
      <div className="background">
        <img src={photo} alt="image" className="backimage"></img>
        <h1>discover with us...</h1>
        <h3>
          are you in rwanda and struggling to make first sentence?Don't warry
        </h3>
      </div>
      <Card
        style={{
          width: 300,
        }}
      >
        <p>OUR VISION</p>
        <p>
          Becoming a fully integrated online cultural and tourism services
          provider.
        </p>
      </Card>
      );
      <Card
        style={{
          width: 300,
        }}
      >
        <p>OUR VISION</p>
        <p>
          {" "}
          Providing fine cultural, linguistic and artistic resource to tourists,
          expatriates and the diaspora.
        </p>
      </Card>
      );
      <Card
        style={{
          width: 300,
        }}
      >
        <p>OUR VISION</p>
        <p>Service Quality</p>
      </Card>
      );
      <Footer />
    </>
  );
};
export default discover;
