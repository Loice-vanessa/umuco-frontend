import React,{ useState,useEffect} from "react";

import { Card, Image, Space, Typography, button, Drawer } from "antd";
// import allcourses from "../assets/data/allCourses.json";
import SingleCourses from "../components/singleCourses";
import coursesServices from "../services/coursesServices";
// import allCourses from "./allCourses";


const { Text, Title } = Typography;
const Courses = () => {
  const[allCourses, setallcourses]= useState([]);
  const [selectedCourses,setSelectedCourses]=useState();
  const [ShowDrawer,setShowDrawer]=useState(false);
  useEffect(()=> {
    coursesServices.getAllCourses().then((res)=>{
      setallcourses(res?.data);
    })
  },[]);
  return (
    <>
    <div style={{ widith: "100%", height: "auto", padding: "10px 100px" }}>
      <Card style={{justifyContent:"space-between",background:"darkgolden"}}>
      
        {
        allCourses.map((Courses)=>(
            <Card.Grid className="courses-card-grid">
          <Space direction="vertical">
            <img  src={Courses?.photo} />
            <Title level={4} style={{ color: "darkgoldenrod" }}>
              {Courses?.title.toUpperCase()}
            </Title>

            <Text type="secondary" italic>
            {Courses?.description}
            </Text>
            <Space>
              <Text> Due Date</Text>
              <Text strong>{Courses?.dueDate}12-02-2022 10h00 am</Text>
            </Space>
  <button onClick={()=>{setSelectedCourses(Courses)
              setShowDrawer(true)}}>Enrol Now!</button>
          </Space>
        </Card.Grid>))}
      </Card>
    </div>
    
    <Drawer 
    title="SingleCourses!" 
    placement="right" 
    onClose={()=>{setShowDrawer(false)}}  
    visible={ShowDrawer}>
    <SingleCourses data={selectedCourses}></SingleCourses>
    </Drawer>
    </>
  );
};
export default Courses;