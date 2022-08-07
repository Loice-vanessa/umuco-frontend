import React from "react";
import "./About.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import logo from "../assets/images/logo.jpg";
const About = () => {
  return (
    <>
      <div className="background2">
        <h1>WE ARE GROWING...</h1>
        <h3>will you grow with us?</h3>
      </div>

      <div className="aboutusCard">
        <Card
          title="UMUCO WEB (rwanda-culture)"
          bordered={false}
          style={{
            width: 500,
          }}
        >
          <img src={logo} alt="" className="logo"></img>
          <p>
            Umuco web: is a cultural education platform that offers free and
            <br></br>
            premium courses. It provides content creators with the opportunity
            of<br></br>
            exhibiting their courses and engaging their audience in the most
            <br></br>
            advanced way that online learning technology has to offer. Our focus
            is on Rwanda. We wish to solve the problem of accessing
            qualitycontents, starting with the Rwandan language, Kinyarwanda.
            Our courses come with various learning facilities that include
            videos, audios, animations, flashcards, quizzes, vocabulary memory
            games, listening exercises, etc. In addition to online learning, we
            offer language coaching. We are just starting and feedback on areas
            to improve is more than welcome. We only exist to serve you better.
            Thank you for visiting!
          </p>
          <p>
            <h1>Murakaza Neza!</h1>
            Hola! We're so excited you have found us. You are welcome.We love
            all our customers, and that includes you too! Enjoy & spread the
            word!
          </p>
          <h4
            style={{
              padding: "10px",
              border: "2px solid black",
              width: "100px",
            }}
          >
            Read more
          </h4>
        </Card>
      </div>
      <div className="aboutusCard">
        <Card
          title="UMUCO WEB (rwanda-culture)"
          bordered={false}
          style={{
            width: 500,
          }}
        >
          <p>
            <h1>OUR STORY</h1><br/>
            This platform was designed to respond to the need of
            innovating course delivery and language material sharing. A lot of
            work has gone into putting all these together. More modules and
            activities will be added as time goes. We will continue to work on
            improving our services and products.<br/>
            <h1>OUR FOCUS</h1><br/>
            At Explore Rwanda, we
            focus on showcasing the beauty of Rwanda through learning her roots,
            language, landscapes, arts, crafts, cuisine, culture etc. We help
            all those who are new in Rwanda to feel at home.<br/>
            <h1>OUT TEAM</h1><br/>
            <h2>ISHIMWE M
            Claire</h2>
            Kinyarwanda Coaching in English & French 
            <h2>INGABIRE Immaculee</h2>
            Kinyarwanda Coaching in English & French 
            <h2>ICYEZA Vanessa</h2> Kinyarwanda Coaching in English & French 
            <h2>vanessa & immacule</h2> Backend & Maintenance claire, Sales & Marketing
          </p>
        </Card>
      </div>
    </>
  );
};
export default About;
