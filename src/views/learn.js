import React from "react";
import "./learn.css";
import logo from "../assets/images/logo.jpg";
import photo from "../assets/images/learn.jfif";
import "antd/dist/antd.css";
import { Card } from "antd";
import Footer from "../components/Footer"
const Learn = () => {
  return (
    <>
      <div className="background">
        <img src={photo} alt="image" className="backimage"></img>
        <h1>let's learn Kinyarwanda...</h1>
        <h3>are you in rwanda and struggling to make first sentence?Don't warry</h3>
      </div>
      <Card
        style={{
          width: 300,
        }}
      >
        <p>OUR VISION</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      );
      <Card
        style={{
          width: 300,
        }}
      >
        <p>OUR VISION</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      );
      <Card
        style={{
          width: 300,
        }}
      >
        <p>OUR VISION</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      );
      <Footer/>
      
    </>
  );
};
export default Learn;
