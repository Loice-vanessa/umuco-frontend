import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import SignIn from './joinForm';


const JoinUs = () => {
   const [visible, setVisible] = useState(false);
   const [confirmLoading, setConfirmLoading] = useState(false);
   const [modalText, setModalText] = useState(<SignIn/>);
 
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
     </>
   );
 };
 
 export default JoinUs