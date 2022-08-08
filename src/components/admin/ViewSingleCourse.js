import React ,{useState} from "react";
import { Table, Space, Drawer,Button ,Typography,Image,Card} from 'antd';
import allCourses from "../../assets/data/course.json";
const { Text, Title } = Typography;
const SingleCourse =({data})=>{

    return(
        <>
        <div>
              <Space direction="vertical">
                <Image preview={true} src={data.photo}></Image>
                <Title level={4} style={{ color: "#1976D1",textAlign:'center' }}>
                  {data.title.toUpperCase()}
                </Title>
                <Text type="secondary" italic>
                  {data.description}
                </Text>
                <Space>
                
                  <Text strong>Due Date:{data.dueDate} 10AM</Text>
                </Space>

                {/* <Button
                  onClick={() => {
                    setSelectedCourse(course);
                    setVisibleDrawer(true);
                  }}
                  type="primary"
                  style={{ paddingLeft: "30px",border: "none",borderRadius:'4rem',justifyItems:'center',marginLeft:'60px'}}>
                  {" "}
                  Register Now
                </Button> */}
              </Space>
   </div>
       
        </>
    )

}
export default SingleCourse;