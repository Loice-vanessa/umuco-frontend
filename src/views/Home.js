import React from "react";
import "antd/dist/antd.css";
import { AudioOutlined, TagOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./Home.css";
import { Card, Col, Row } from "antd";
import amasunzu from "../assets/images/amasunzu.JPG";
import ingoma from "../assets/images/ingoma.jpg";
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
              <h2 bold> Youth Empowerment </h2>
              <p>
                The Directorate of Youth empowerment monitors and evaluates the
                implementation of programmes related to Youth socio-economic
                empowerment{" "}
              </p>
              <h4>Read more</h4>
            </Card.Grid>

            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h2 bold>Culture Promotion</h2>
              <p>
                The Directorate of Culture looks systematically and
                comprehensively the promotion of Culture and Art related fields
              </p>
              <h4>Read more</h4>
            </Card.Grid>

            <Card.Grid className="site-card">
              <TagOutlined className="tag" />
              <h2 bold>Programmes and Projects</h2>
              <p>
                The Ministry of Youth and Culture has various programmes and
                Projects that play a vital Role in creating an enabling
                environment for youth Socio…
              </p>
              <h4>Read more</h4>
            </Card.Grid>
          </div>
          <h3 className="explore">
            <button style={{backgroundColor:"rgb(11, 123, 183)",border:"none",
            padding:"10px 30px", margin:"20px"}}>
              Explore more</button> 
          </h3>
        </div>
        <div className="AmasunzuCard">
          <Card
            title="Rwandan Culture and Traditions"
            bordered={false}
            style={{
              width: 500,
            }}
          >
            <p>
              Amasunzu Amasunzu is a traditional Rwandan hairstyle that was once
              worn by men and women. The unique style is created by cutting some
              of the hair sideways and braiding the top. A person who had this
              hairstyle was identified as powerful, noble, prestigious and
              brave. Amasunzu hairstyle made a come back in 2018 when Lupita
              Nyong’o wore it on the red carpet at the Oscar. Visit the king’s
              Palace and the Ethnographic Museum to learn more about Rwanda’s
              cultural heritage.
            </p>
          </Card>
          <img src={amasunzu} alt="" className="amasunzuImg"></img>
        </div>
        <div className="AmasunzuCard">
          <img src={ingoma} alt="" className="amasunzuImgLeft"></img>
          <Card
            title="Rwandan Culture and Traditions"
            bordered={false}
            style={{
              width: 500,
            }}
          >
            <p>
              Rwandan Culture and Traditions Artisanal Crafts Weaving and basket
              making is a traditional art still used today to make dry
              containers for storing food and medicines. These are also known as
              peace pots and had traditional values such as to commemorate
              weddings or as a welcome gift. Pottery is one of the oldest forms
              of art in Rwanda and can still be seen in many towns today using
              traditional Batwa techniques. Known for its good quality clay
              these potteries are still widely used for cooking and storing
              liquids.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Home;
