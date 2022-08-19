import React,{ useState} from "react";

import { Card, Image, Space, Typography, button, Drawer } from "antd";
import allcourses from "../assets/data/allCourses.json"
import SingleEnrrol from "../components/singleEnrrol";
import allCourses from "./allCourses";
// import gorilla from "../Assets/images/gorilla.jpeg"; 
// import lake from "../Assets/images/lake.jpeg";

const { Text, Title } = Typography;
const Enrrol = () => {
  const[selectedEnrrol,setSelectedEnrrol]=useState()
  const[ShowDrawer,setShowDrawer]=useState(false)
  return (
    <>
    <div style={{ widith: "100%", height: "auto", padding: "10px 100px" }}>
      <Card style={{justifyContent:"space-between",background:"darkgolden"}}>
      
        {
        allCourses.map((Enrrol)=>(
            <Card.Grid className="Enrrol-card-grid">
          <Space direction="vertical">
            <img  src={Enrrol.photo} />
            <Title level={4} style={{ color: "darkgoldenrod" }}>
              {allCourses.title.toUpperCase()}
            </Title>

            <Text type="secondary" italic>
            {allCourses.description}
            </Text>
            <Space>
              <Text> Due Date</Text>
              <Text strong>{allCourses.dueDate}12-02-2022 10h00 am</Text>
            </Space>
  <button onClick={()=>{setSelectedEnrrol(Enrrol)
              setShowDrawer(true)}}>Enrrol Now!</button>
          </Space>
        </Card.Grid>))}
      </Card>
    </div>
    
    <Drawer 
    title="SingleEnrrol!" 
    placement="right" 
    onClose={()=>{setShowDrawer(false)}}  
    visible={ShowDrawer}>
    <SingleEnrrol data={selectedEnrrol}></SingleEnrrol>
    </Drawer>
    </>
  );
};
export default Enrrol;