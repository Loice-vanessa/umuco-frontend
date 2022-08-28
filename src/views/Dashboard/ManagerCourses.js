import { Table, Space, Drawer,Button , Modal, Typography,Image,Card} from 'antd';
import React,{useState}from "react";
import allCourses from "../../assets/data/course.json";
import 'antd/dist/antd.css';
import SingleCourse from "../../components/admin/ViewSingleCourse";
import Dashboard from "../../components/DashboardLayout";
import NewCourses from '../../components/newCourse';

const { Text, Title } = Typography;
const Allcourse =()=>{
  const [visibleDrawer, setVisibleDrawer] = useState(false);
const [courseSelected, setSelectedCourse] = useState({});

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },

  {
    title: 'Due-Date',
    dataIndex: 'dueDate',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  }, {
    title: 'Action',
    key: 'operation',
    render: (_, record) => (
      <Space style={{color:''}}><a>Delete</a><a>Publish</a>
      <a
      onClick={() => {
        setSelectedCourse(record);
        setVisibleDrawer(true);
      }} 
    >
      Views
    </a></Space>
    ),
  },
];
    return(
      <>
      <Dashboard menuSelectorIndex="1">
      <Drawer
        visible={visibleDrawer}
        onClose={() => {
          setVisibleDrawer(false);
        }}
      >
        <SingleCourse data={courseSelected} />

      </Drawer>
    <Table
    columns={columns}
    
    dataSource={allCourses}
  />
    <Button> create course</Button>
    </Dashboard>
    
    <Modal title="Create New Course" visible={true} onOk={()=>{}} onCancel={()=>{}}>
      <NewCourses/>
        </Modal>
  </>
    )
}
export default Allcourse;