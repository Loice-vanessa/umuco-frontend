// 

import React ,{useState} from "react";
import logo from "../assets/images/umucologo2.jpg";
import LogINForm from "../views/LogInForm";
import SignIn from '../views/joinForm';
import { Button, Modal,Input,Form } from 'antd';
import "./Navbar.css"
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">All courses</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">learn with coach</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: 'pricing',
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
       <div className="nav">
           <img src={logo} alt="rwanda-culture" className="logo-img"/>
           <div  className="Nav-links">
               <ul>
                   <li> <a href="/home" className="Nav-link">
                           HOME
                       </a>
                   </li>
                   <li>
                       <a href="aboutus" className="Nav-link">
                           ABOUT-US
                       </a>
                   </li>
                   <li>
                       <a href="" className="Nav-link">
                        LEARN
                       <Dropdown overlay={menu} trigger={['click']}>
                       <DownOutlined></DownOutlined>
  </Dropdown>
                       </a>
                   </li>
                   <li>
                       <a href="/user" className="Nav-link">
                          DISCOVER
                          <Dropdown>
                            <DownOutlined></DownOutlined>
                          </Dropdown>
                       </a>
                   </li>
                   </ul> </div>
<div style={{display:"flex",margin:"24px"}}>
  
<Button className="JoinBtn" onClick={showModal} >
        LOGIN
       </Button>
       
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
        
       <Button type="primary" onClick={showModal} >
         Join-Us
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
    );
};
export default Nav;