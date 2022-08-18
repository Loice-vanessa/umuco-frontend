import React from "react";
import "antd/dist/antd.css";
import { AudioOutlined, TagOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./Home.css";
import { Card, Col, Row } from "antd";
import amasunzu from "../assets/images/amasunzu.JPG";
import ingoma from "../assets/images/ingoma.jpg";
import { FaQuoteLeft } from "react-icons/fa";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h3 className="heading-title">Explore Rwanda the Heart of Africa</h3>
        <div className="home-content">
          <Search
            className="searchbtn"
            placeholder="what are you looking for"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />

          <div className="site-card-wrapper">
            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h3 bold> MEMBERS </h3>
              <p>
              
When you join the Umuco Community, we invest in your education and you pay us back when you can.​

              </p>
              <h4>Read more</h4>
            </Card.Grid>

            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h3 bold>INVESTORS</h3>
              <p>
              
Investing in Umuco Community is a big opportunity and we have many options for you to get involved and impact lives.
              </p>
              <h4>Read more</h4>
            </Card.Grid>

            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h3 bold>PARTNERS</h3>
              <p>
              
Our partners are well vetted to ensure equitable access to education and holistic educational programs
              </p>
              <h4>Read more</h4>
            </Card.Grid>
          </div>
        </div>
      </div>
      <button
        style={{
          backgroundColor: "rgb(11, 123, 183)",
          border: "none",
          padding: "6px 30px",
          margin: "80px 560px",
          fontSize: "16px",
          borderRadius: "20px",
        }}
      >
        <h4>Explore more</h4>
      </button>
      <div className="AmasunzuCard">
        <Card
          style={{
            width: 500,
          }}
        > <h3>Rwandan Culture and Traditions</h3>
          <p>
            Amasunzu Amasunzu is a traditional Rwandan hairstyle that was once
            worn by men and women. The unique style is created by cutting some
            of the hair sideways and braiding the top. A person who had this
            hairstyle was identified as powerful, noble, prestigious and brave.
            Amasunzu hairstyle made a come back in 2018 when Lupita Nyong’o wore
            it on the red carpet at the Oscar. Visit the king’s Palace and the
            Ethnographic Museum to learn more about Rwanda’s cultural heritage.
          </p>
          <h4 style={{padding:"10px",border:"2px solid black",width:"120px",marginLeft:"60%"}}>Read more</h4>
        </Card>
        <img src={amasunzu} alt="" className="amasunzuImg"></img>
      </div>
      <div className="AmasunzuCard">
        <img src={ingoma} alt="" className="ImgLeft"></img>
        <Card
          style={{
            width: 500,
          }}
        ><h3>Rwandan Culture and Traditions</h3>
          <p>
            Rwandan Culture and Traditions Artisanal Crafts Weaving and basket
            making is a traditional art still used today to make dry containers
            for storing food and medicines. These are also known as peace pots
            and had traditional values such as to commemorate weddings or as a
            welcome gift. Pottery is one of the oldest forms of art in Rwanda
            and can still be seen in many towns today using traditional Batwa
            techniques. Known for its good quality clay these potteries are
            still widely used for cooking and storing liquids.
          </p>
          <h4 style={{padding:"10px",border:"2px solid black",width:"120px",marginLeft:"60%"}}>Read more</h4>
        </Card>
      </div>
      <div className="knowMore">
        
          <h5>Did you know</h5>
          <FaQuoteLeft style={{color:"gold",fontSize:"34px",marginTop:"20px"}}/>
          <ul>
        
            <li>
            Rwanda attaches great importance to the preservation and promotion of its
culture as a cornerstone for sustainable development. 
              Rwanda is truly the Heart of Africa, and it's easy to see why…
              come and explore its beauty.”
            </li>
          </ul>
        
      </div>
      <div id="newsletter-container">
      <div class="container">
      <div>
        <h3>Stay updated on the latest adventures.</h3>
        <h4>Enter your email for the latest updates on trips, sites, offers, and more.</h4>
        <form>
          <i class="bi bi-envelope-fill"></i>
            <input type="email" class="form-control" id="newsletter-email"
            placeholder="Your email address" ></input>
          <button type="submit" class="btn">Submit</button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};
export default Home;
