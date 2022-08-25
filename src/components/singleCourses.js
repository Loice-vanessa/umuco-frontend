//import { Space } from "antd";
import React from "react";
import { Card, Space, Typography, Button,Input  } from "antd";
import {Carousel} from 'antd';
// const { Text, Title } = Typography;


const SingleCourses = ({data}) => {
    return(
        <>
    <div>
        <h1>{data.title}</h1>
        <Carousel autoplay>
        <img src={data.photo} alt=""></img>
        <img src={data.photos} ></img>
        </Carousel>        
        <p>{data.prepareBy}</p>
        <p>{data.description}</p>
        <p>{data.dueDate}</p>
        </div>
        <Card title="APPLICATION INFORMATION">
            <Space direction="vertical">
              <Input placeholder="Email"></Input>
               <Input placeholder="Phone"></Input>
              <Button onClick={() =>{}}>Send Aplication Now!
              </Button>
             </Space>
        </Card>


</>


       
         

    );
};
export default SingleCourses;