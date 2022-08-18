import React, { useState } from "react";
import { Button, message, Steps, Image, TimePicker } from "antd";
import "./Home.css";
import claire from "../assets/images/claire.jpg";
import Immaculate from "../assets/images/myself.jpeg";
import FirstContent from "./firstContent";
import ThirdContent from "./thirdContent";
import SecondContent from "./secondContent";
import LastContent from "./lastContent";
import FifthContent from "./FifthContent";
import pic from "../assets/images/cultureTag2.jpg";
const { Step } = Steps;
const steps = [
  {
    title: "Coaching",
    content: <FirstContent />,
  },

  {
    title: "Details",
    content: <ThirdContent />,
  },
  {
    title: "Payment",
    content: <LastContent />,
  },
  {
    title: "Done",
    content: <FifthContent />,
  },
];
const Coaching = () => {
  const [random, setRandom] = useState();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="learningPic">
        <Image
          height={400}
          width={1350}
          src={pic}
          placeholder={
            <Image preview={false} src={"Learn with a coach"} width={200} />
          }
        />
      </div>
      
      <h1 className="learn-Profile">LEARN WITH A COACH</h1>
      <p style={{ width: "70%", fontSize: "18px" }}>
        Like traditional courses, online learning involves a series of lessons
        designed to teach a subject via a portal and can be taken by anyone from
        the comfort of their own home. We offer access to quality Kinyarwanda
        materials and dedicated coaches are available to guide your Kinyarwanda
        experience. Nevertheless, the help of a coach in learning a new language
        like Kinyarwanda is unmatchable. We aim to provide you a clean booking
        interface that helps you match your schedules.
      </p>
      <div style={{ display: "flex", margin: "120px", paddingLeft: "80px" }}>
        <img
          src={claire}
          alt=""
          style={{ width: "22rem", marginLeft: "30px", paddingRight: "20px" }}
        ></img>
        <p>
          Claire is a Rwandan educator, translator, interpreter and writer.
          <br /> She is passionate about education, languages and intercultural
          <br />
          communications. She has been teaching Kinyarwanda for the past 10
          <br />
          years. She is ready to coach your classes. <br />
          <h3>Is coaching for you? </h3> If you are a fresh beginner with less
          exposure to native speakers, <br /> you may need to book a private
          class where you will get a dedicated coach <br />
          to guide your learning journey. If you are an intuitive learner or if
          you often
          <br /> speak to native speakers, an online plan would be all you need
          to get started. <br />
          You may learn along videos and practice pronunciations using audios.
        </p>
      </div>
      <div style={{ display: "flex", margin: "120px", paddingLeft: "80px" }}>
        <p>
          Immaculate is a native Kinyarwanda speaker, who has special interests{" "}
          <br />
          in learning, reading and languages. He speaks four languanges
          including <br /> Chinese Mandarin. He has been coached by Denyse and
          is ready <br />
          to lead your Kinyarwanda learning Journey.
          <h3>How it works</h3>
          If you have been in Rwanda for a while, assuming that you know
          greetings, <br />
          numbers, food, etc.; you can read the intermediate level course with{" "}
          <br />
          audio (no videos yet). This will enhance both your grammar and
          vocabulary.
          <br /> If you are not sure, please book a free appointment and <br />
          we will be happy to help you figure it out.
        </p>
        <img
          src={Immaculate}
          alt=""
          style={{ width: "28rem", height: "18rem", paddingLeft: "40px" }}
        ></img>
      </div>
      <div className="Dashboard" style={{ marginBottom: "60px" }}>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Choose your desired coach and book your class today:
        </p>

        <Steps current={current} size="small">
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default Coaching;
