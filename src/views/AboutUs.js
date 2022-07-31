import React from "react";
import "./About.css";
import logo from "../assets/images/logo.jpg";
import photo from "../assets/images/about.jpg";
const About = () => {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo img" className="logo-img" />
        <ul className="nav-links">
          <li>
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/aboutUs" className="nav-link">
              about us
            </a>
          </li>
          <li>
            <a href="/learn" className="nav-link">
              learn
            </a>
          </li>
          <li>
            <a href="/discover" className="nav-link">
              discover
            </a>
          </li>
        </ul>
        <div className="content">
          <button className="btn">
            <a href="/home" className="nav-link">
              log in
            </a>
          </button>

          <button className="btn">
            <a href="/about-us" className="nav-link">
              join us
            </a>
          </button>
        </div>
      </div>
      <div>
        <img src={photo} alt="image" className="backimage"></img>
        <h1>WE ARE GROWING...</h1>
        <h3>will you grow with us?</h3>
      </div>
      <section>
        <p style={{ textAlign: "center" }}>
          Umuco web: is a cultural education platform that offers free and
          premium courses. It provides content creators with the opportunity of
          exhibiting their courses and engaging their audience in the most
          advanced way that online learning technology has to offer.
        </p>
        <br /> <br />
        <p style={{ textAlign: "center" }}></p>Our focus is on Rwanda. We wish
        to solve the problem of accessing qualitycontents, starting with the
        Rwandan language, Kinyarwanda. Our courses come with various learning
        facilities that include videos, audios, animations, flashcards, quizzes,
        vocabulary memory games, listening exercises, etc. In addition to online
        learning, we offer language coaching. We are just starting and feedback
        on areas to improve is more than welcome. We only exist to serve you
        better. Thank you for visiting!
      </section>
    </>
  );
};
export default About;
