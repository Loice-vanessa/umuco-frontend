import React from "react";
import "antd/dist/antd.css";
import { AudioOutlined, TagOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./Home.css";
import { Card, Image } from "antd";
import amasunzu from "../assets/images/amasunzu.JPG";
import ingoma from "../assets/images/trad.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import config from "react-reveal/globals";
import Zoom from "react-reveal/Zoom";
config({ ssrFadeout: true, ssrFadein: true });

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
          <div className="site-card-wrapper">
            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h3
                bold
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                {" "}
                MEMBERS{" "}
              </h3>
              <p class="center">
                When you join the Umuco Community, we invest in your education
                and you pay us back when you can.​
              </p>
              <h4
                style={{
                  padding: "10px",
                  border: "2px solid black",
                  width: "160px",
                  margin: "auto",
                }}
              >
                Become A Member
              </h4>
            </Card.Grid>

            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
                bold
              >
                INVESTORS
              </h3>
              <p class="center">
                Investing in Umuco Community is a big opportunity and we have
                many options for you to get involved and impact lives.
              </p>
              <h4
                style={{
                  padding: "10px",
                  border: "2px solid black",
                  width: "160px",
                  margin: "auto",
                }}
              >
                Become An Investor
              </h4>
            </Card.Grid>

            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
                bold
              >
                PARTNERS
              </h3>
              <p class="center">
                Our partners are well vetted to ensure equitable access to
                education and holistic educational programs
              </p>
              <h4
                style={{
                  padding: "10px",
                  border: "2px solid black",
                  width: "160px",
                  margin: "auto",
                }}
              >
                Become A Parten
              </h4>
            </Card.Grid>
          </div>
        </div>
      </div>
      <div class="center" style={{ padding: "6rem 40%" }}>
        <button
          style={{
            backgroundColor: "rgb(11, 123, 183)",
            border: "none",
            padding: "6px 30px",
            fontSize: "16px",
            borderRadius: "20px",
          }}
        >
          <h4>Explore more</h4>
        </button>
      </div>
      <div className=" center ContainerCard">
        <div
          style={{
            width: 500,
          }}
        >
          <p>Rwandan Culture and Tradition</p>
          <h2>Amasunzu</h2>
          <p>
            Amasunzu Amasunzu is a traditional Rwandan hairstyle that was once
            worn by men and women. The unique style is created by cutting some
            of the hair sideways and braiding the top. A person who had this
            hairstyle was identified as powerful, noble, prestigious and brave.
            Amasunzu hairstyle made a come back in 2018 when Lupita Nyong’o wore
            it on the red carpet at the Oscar. Visit the king’s Palace and the
            Ethnographic Museum to learn more about Rwanda’s cultural heritage.
          </p>
          <h4
            style={{
              padding: "8px 10px",
              border: "2px solid black",
              width: "120px",
              margin: "auto",
            }}
          >
            Read more
          </h4>
        </div>
        <div class="intro-image with-box-shadow desktop-only self-center">
          <Image
            className="amasunzuImg"
            src="http://www.visitrwanda.com/wp-content/uploads/fly-images/4516/Amasunzu-Collage-web-v2-1650x1004.jpg"
            alt="amasunzu rwandan culture " preview="none"
          ></Image>
        </div>
        {/* <Zoom ssrFadeout><img src={amasunzu} alt="" className="amasunzuImg"></img></Zoom> */}
      </div>
      <div className="center ContainerCard">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4GEkk5fS9Vo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
  
      </div>
      <div style={{ display:"flex",alignitems:"center",justifyContent:"center",gap:"3rem",fontSize:"16px",fontWeight:"500"}}>
      <p >Our Culture is Our Brand. We are here to help you explore our Rwandan Culture through <br/>Dance/Music/Poetry and many more. 
We Dance to Stay Fit and Cultured.Here is an amazing opportunity to help<br/> your child learn the Rwandan Traditional Dance and gain more skills about the Rwandan culture. 
#OurCultureOurBrand</p>
      </div>
      <br/><br/>
      <div className="knowMore">
        <h5>Did you know</h5>
        <FaQuoteLeft
          style={{ color: "gold", fontSize: "34px", marginTop: "25px" }}
        />
        <ul>
          <li>
            Rwanda attaches great importance to the preservation and promotion
            of its culture as a cornerstone for sustainable development. Rwanda
            is truly the Heart of Africa, and it's easy to see why… come and
            explore its beauty.”
          </li>
        </ul>
      </div>
      <div id="newsletter-container">
        <div class="container">
          <div>
            <h3>Stay updated on the latest adventures.</h3>
            <h4>
              Enter your email for the latest updates on trips, sites, offers,
              and more.
            </h4>
            <form>
              <i class="bi bi-envelope-fill"></i>
              <input
                type="email"
                class="form-control"
                id="newsletter-email"
                placeholder="Your email address"
              ></input>
              <button type="submit" class="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
