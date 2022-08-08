import React from "react";
import {Input,Button,Form,Typography} from "antd";
import Dashboard from "../../components/DashboardLayout";
const {  Title } = Typography;


const NewCourse =()=>{
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return(
        <>
        <Dashboard menuSelectorIndex="2" style={{display:"flex"}}>
        <Title style={{ display:"flex",marginLeft:"180px"
        }}>Create Course</Title>
        <Form onFinish={onFinish}
        style={{backgroundColor:'#999',padding:' 4rem 6rem',marginRight:'380px',display:"block"
        ,flexWrap:'wrap'}}>
        
                    <Form.Item label="Title"rules={[{ required: true }]}>
                    <Input placeholder="Title"></Input></Form.Item>
                   
                <Form.Item label="Description"rules={[{ required: true }]}>
                <Input placeholder="Description"></Input></Form.Item>
                <Form.Item label="Due-Date"rules={[{ required: true }]}>
                <Input placeholder="dueDate"></Input></Form.Item>
                <Form.Item label="Course-level"rules={[{ required: true }]}>
                <Input placeholder="Course-level"></Input></Form.Item>
                <Form.Item rules={[{ required: true }]}>
                <Button onClick={() =>{}} type='default' htmlType="Submit"
                style={{padding:'1px 50px',fontSize:'16px',justifyItems:'center',
                marginLeft:'160px'}}>Publish</Button></Form.Item>
                </Form>
                </Dashboard>
                </>
    )
}
export default NewCourse;

