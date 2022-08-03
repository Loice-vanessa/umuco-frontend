import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import LogINForm from './LogInForm';


const LogIn = () => {
   const [visible, setVisible] = useState(false);
   const [confirmLoading, setConfirmLoading] = useState(false);
   const [modalText, setModalText] = useState(false);
 
   const showModal = () => {
     setVisible(true);
   };
 
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
       <Button type="primary" onClick={showModal} >
        LogIN
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
     </>
   );
 };
 
 export default LogIn