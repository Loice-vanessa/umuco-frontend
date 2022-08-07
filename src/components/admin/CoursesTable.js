import React, { useState } from "react";
import { Table, Tag, Space, Modal, Drawer, notification } from "antd";
import users from "../../assets/data/users.json";
import SingleCourse from "./ViewSingleCourse";

const CoursesTable = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [userSelected, setSelectedUser] = useState({});
  const columns = [
    {  
      title: "ID",
      dataIndex: "id",
      key: "id",
   
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text.split(" ")[0]}</a>,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (text) => (
        <Tag color={text ? "green" : "red"}>{text.toString()}</Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "action",
      render: (_, record) => (
        <Space >
          <a style={{ border: "1px solid green", padding: "5px" }}>Activate</a>
          <a
            onClick={() => {
              setSelectedUser(record);
              setVisibleModal(true);
            }}
          >
            Delete
          </a>
          
        </Space>
      ),
    },
  ];
  return (
    <>
      <Modal
        okText="Yes"
        cancelText="Exit"
        visible={visibleModal}
        onOk={() => {
          setVisibleModal(false);
          notification.success({
            message: "User deleted successfully.",
          });
        }}
        onCancel={() => {
          setVisibleModal(false);
          notification.warn({ message: "You canceled your user delete" });
        }}
      >
        <h2>Are you sure you want to delete {userSelected.name}</h2>
      </Modal>
     
      <h1 style={{ float: "left", fontWeight: "bold", marginLeft: "10px",color:"black" }}>
        Customers
      </h1>
      <button
        style={{
          float: "right",
          color: "goldenrod",
          background: "none",
          border: "1px solid red",
          padding: "5px",
          marginRight:'80px'
        }}
      >
        <a href="/user">ADD NEW</a>
      </button>
      <Table columns={columns} dataSource={users} />
    </>
  );
};
export default CoursesTable;
