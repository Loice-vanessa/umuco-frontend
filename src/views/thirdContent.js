import { Button, Checkbox, Form, Input,Typography} from "antd";
import React from "react";
import { LockOutlined, UserOutlined,GoogleOutlined  } from '@ant-design/icons';
import logo from "../assets/images/tubahaye.JPG";

const {Text} =Typography;

const tailFormItemLayout = {
  wrJoinFormerCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ThirdContent = () => {
 

  return (

    // <div className="logo2"> <img src={logo} alt="Logo" /></div>
    <Form >
      <div style={{display:"flex"}}> 
      <img src={logo} alt="Logo"
      style={{width:'320px',height:'440px',paddingRight:'32px'}}></img>
      <div>
        <div style={{display:"flex"}}>
      <Form.Item {...tailFormItemLayout}>
        <Button htmlType="submit"
        
        style={{backgroundColor:"black", color:"white",width:"160px", height:"40px",
         borderRadius:"20px"}}>
          <a href="">LOG IN</a>
        </Button>
        
      </Form.Item>
      </div>
    <Form.Item
        name="email"
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username/Email" />
      </Form.Item>
      
    
      <Form.Item
        name="password"
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>
      

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox >
        <Text strong>Remember me</Text> Forgot password
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button htmlType="submit" GoogleOutlined
        style={{backgroundColor:"black", color:"white",width:"320px",borderRadius:"30px", height:"40px"}}>
          SIGN UP
        </Button>
        
      </Form.Item>
      <Button 
      htmlType="submit" className="login-form-button"
      style={{backgroundColor:"#fcb900", color:"white",width:"320px",borderRadius:"30px", height:"40px"}}>
          <GoogleOutlined style={{fontSize:"20px",paddingRight:"20px", width:"30px"}}/> Or continue with GOOGLE
        </Button>
        </div></div>
    </Form>
  );
};

export default ThirdContent;
