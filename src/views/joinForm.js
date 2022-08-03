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

const JoinForm = () => {
 

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
        
        style={{backgroundColor:"#ccc", color:"white",width:"180px", height:"40px"}}>
           <a href="">LOG IN</a>
        </Button>
        
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button htmlType="submit"
        style={{backgroundColor:"black", color:"white",width:"180px", height:"40px"}}>
          <a href="">SIGN UP</a>
        </Button>
       
      </Form.Item>
      </div>
    <Form.Item
        name="email"
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <div style={{display:"flex"}}>
      {/* <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}> */}
      <Form.Item
        name="first Name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="last name"
          placeholder="Last Name"
        />
      </Form.Item>
       </div>
      {/* </Form> */}
    
      <Form.Item
        name="password"
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="confirm password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm Password" />
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
        <Text strong>I accept the</Text> Terms of Service and Privacy Policy
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button htmlType="submit"
        style={{backgroundColor:"black", color:"white",width:"360px",borderRadius:"30px", height:"40px"}}>
          SIGN UP
        </Button>
        
      </Form.Item>
      <Button UserOutlined={GoogleOutlined } 
      htmlType="submit" className="login-form-button"
      style={{backgroundColor:"#fcb900", color:"white",width:"360px",borderRadius:"30px", height:"40px"}}>
          <GoogleOutlined style={{fontSize:"20px",paddingRight:"20px", width:"30px"}}/> Or continue with GOOGLE
        </Button>
        </div></div>
    </Form>
  );
};

export default JoinForm;
