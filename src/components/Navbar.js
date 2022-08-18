// 

import React ,{useState} from "react";
import logo from "../assets/images/umucologo2.jpg";
import LogINForm from "../views/LogInForm";
import SignIn from '../views/joinForm';
import { Button, Modal,Affix } from 'antd';
import "./Navbar.css"
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
const menu = (
    <Menu
      items={[
        {
          key: '0',
          label: <a href="https://www.youtube.com/watch?v=tV0metUxKFo">lesson</a>,
        },
        {
          label: <a href="https://www.youtube.com/watch?v=BZCuHpFhuaQ&t=22s">pricing</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <a href="https://www.youtube.com/watch?v=xOU7nfCc_y4">learn with coach</a>,
          key: '3',
        },
      ]}
    />
  );



const Nav = () => {
  
 
  const [modalText, setModalText] = useState(<SignIn/>);

  const showModal = () => {
    setVisible(true);
  };
  
  const [visible, setVisible] = useState(false);
   const [confirmLoading, setConfirmLoading] = useState(false);
   
 

 
   const handleOk = () => {
     setModalText('The modal will be closed after two seconds');
     setConfirmLoading(true);
     setTimeout(() => {
       setVisible(false);
       setConfirmLoading(false);
     }, 2000);
   };
 
   const handleCancel = () => {
     console.log('Clicked cancel button');
     setVisible(false);
   };
 
    return (
      <>
      <Affix offsetTop={1}>
       <div className="nav">
           <img src={logo} alt="rwanda-culture" className="logo-img"/>
           <div  className="Nav-links">
               <ul>
                   <li> <a href="/home" className="Nav-link">
                           Home
                       </a>
                   </li>
                   <li>
                       <a href="aboutus" className="Nav-link">
                           About-Us
                       </a>
                   </li>
                   <li>
                       <a href="/learn" className="Nav-link">
                        Learn
                        
                       <Dropdown overlay={menu} trigger={['click']}placement="bottomLeft">
                       <DownOutlined></DownOutlined>
  </Dropdown>
                       </a>
                   </li>
                   <li>
                       <a href="/user" className="Nav-link">
                          Discover
                          <Dropdown>
                            <DownOutlined></DownOutlined>
                          </Dropdown>
                       </a>
                   </li>
                   </ul> </div>
<div style={{display:"flex",}}>
  
<h4 style={{margin:"32px",fontStyle:"bold"}} onClick={showModal} >
        LOGIN
       </h4>
       
       <Modal
      width={700}
      border-radius={140}
         visible={visible}
         onOk={handleOk}
         confirmLoading={confirmLoading}
         onCancel={handleCancel}
         footer={null}
          
       >
         <p>{<LogINForm/>}</p>
       </Modal>
        
       <Button className="JoinBtn" onClick={showModal} >
         Get Started
       </Button>
       
       <Modal
      width={700}
         visible={visible}
         onOk={handleOk}
         confirmLoading={confirmLoading}
         onCancel={handleCancel}
         footer={null}
         
       >
         <p>{modalText}</p>
       </Modal>
</div>
    
                  
           
         
       </div>
       </Affix>
       </>
    );
};
export default Nav;