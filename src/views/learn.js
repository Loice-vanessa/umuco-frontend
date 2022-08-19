import React, { useEffect, useState } from "react";
import "./learn.css";
import "antd/dist/antd.css";
import CardLearn from "../components/learnCard1";

// import CardLearn1 from "../component/learnCard1";
// import CardLearn2 from "../component/learnCard2";
// import CardLearn3 from "../component/learnCard3";
import rwandablack from "./../assets/images/rwanda-black.png";
import ingomaLearn from "./../assets/images/ingoma-learn.png";
import girafeLearn from "./../assets/images/girafe-learn.png";
import LearnModal from "../components/learnModal";
const Learn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState();
  return (
    <>
      <div className="background">
        <h1>Let's learn Kinyarwanda...</h1>
        <h3>
          Are you in Rwanda and struggling to make first sentence? Don't worry
        </h3>
        <div className="hero-btn">
          <button>View Programmes</button>
          <button style={{ color: "white", background: "#FCC401" }}>
            Get Started For Free
          </button>
        </div>
      </div>
      <div className="card-container">
        <CardLearn/>
        <CardLearn/>
        <CardLearn/>
      </div>
      <div className="learn">
        <h3>Do you know some Kinyarwanda?</h3>
        <div className="quick-test">Take a Quick Test</div>
      </div>
      <div className="learn-cards">
        <div className="learn-card">
          <img src={rwandablack} alt="" />
          <div className="spann">
            <h5>Begginer</h5>
            <p>Kinyarwanda for the first time</p>
          </div>
          <p>$150/3 Months</p>
          <p>
            online library Access Basic phrases&Greetings 15 Coaching Sessions
            Completion Certificate
          </p>
          <button
            onClick={() => {
              setIsModalVisible(true);
              setData({
                price: "$149 for 3 months",
                priceUSD: "$149",
                description: "Beginner kinyarwanda - Initial payment",
              });
            }}
          >
            Choose Plan
          </button>
        </div>
        <div className="learn-card" style={{ background: "#BFBABA" }}>
          <img src={ingomaLearn} alt="" />
          <div className="spann" style={{ background: "#3E3B3B" }}>
            <h5>Intermediate</h5>
            <p>Basic sentence construction</p>
          </div>
          <p style={{ color: "#000" }}>$300/ 6 Months</p>
          <p style={{ color: "#000" }}>
            online library Acess Basic Grammar &constructions 30 c0aching
            sessions completion certificate
          </p>
          <button
            style={{ background: "#3E3B3B" }}
            onClick={() => {
              setIsModalVisible(true);
              setData({
                price: "$299 for 6 months",
                priceUSD: "$299",
                description:
                  "Intermediate Basic sentence construction - Initial payment",
              });
            }}
          >
            Choose Plan
          </button>
        </div>
        <div className="learn-card" style={{ background: "#000000B0" }}>
          <img src={girafeLearn} alt="" />
          <div className="spann" style={{ background: "#DAB043" }}>
            <h5>Advanced</h5>
            <p>Speak confidently like a native</p>
          </div>
          <p>$450/9 Months</p>
          <p>
            Online library. Acess Advanced Grammar & Literature 30 coaching
            sessions completion certificate
          </p>
          <button
            style={{ background: "#DAB043" }}
            onClick={() => {
              setIsModalVisible(true);
              setData({
                price: "$449 for 9 months",
                priceUSD: "$449",
                description:
                  "Advanced Speak confidently like a native - Initial payment",
              });
            }}
          >
            Choose Plan
          </button>
        </div>
      </div>
      {isModalVisible && (
        <LearnModal setIsModalVisible={setIsModalVisible} data={data} />
      )}
    </>
  );
};
export default Learn;
