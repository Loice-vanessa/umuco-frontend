
import React from "react";

import photo from "../assets/images/learn.jfif";
import './About.css'
import 'antd/dist/antd.css';
import { Card } from "antd";
import logo from "../assets/images/logo.jpg"
const About = () => {
    return(
      <>
         <div className="profileLearn">
      
        <h1>WE ARE GROWING...</h1>
         <h3>will you grow with us?</h3> 
           </div>
           <div style={{display:"flex"}}>
           <img src={logo} className="logo"/>
         
        <p>
           Umuco web: is a cultural education platform that offers free and<br></br>
           premium courses. It provides content creators with the opportunity of<br></br>
           exhibiting their courses and engaging their audience in the most<br></br>
           advanced way that online learning technology has to offer.
         </p>
         </div>
         <br /> <br />
         <p style={{ textAlign: "center" }}></p>Our focus is on Rwanda. We wish
         to solve the problem of accessing qualitycontents, starting with the
         Rwandan language, Kinyarwanda. Our courses come with various learning
         facilities that include videos, audios, animations, flashcards, quizzes,
         vocabulary memory games, listening exercises, etc. In addition to online
        learning, we offer language coaching. We are just starting and feedback
         on areas to improve is more than welcome. We only exist to serve you
         better. Thank you for visiting!
         <h1>OUR STORY</h1>
      
         <p>This platform was designed to respond to the need of innovating course
         delivery and language material sharing. A lot of work has gone into
          putting all these together. More modules and activities will be added
          as time goes. We will continue to work on improving our services and
         products.</p>

          <h1>OUR FOCUS</h1>

          <p> At Explore Rwanda, we focus on showcasing the
          beauty of Rwanda through learning her roots, language, landscapes,
          arts, crafts, cuisine, culture etc. We help all those who are new in
          Rwanda to feel at home. </p>

          <h1>OUT TEAM</h1>

          <p> ISHIMWE M Claire, Kinyarwanda
          Coaching in English & French INGABIRE Immaculee, Kinyarwanda Coaching
          in English & French ICYEZA Vanessa, Kinyarwanda Coaching in English &
           French vanessa & immacule, Backend & Maintenance</p>
        
    
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
      </>
    )
 
};
export default About;