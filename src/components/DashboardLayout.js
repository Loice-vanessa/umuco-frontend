import React,{ useState } from "react";
import 'antd/dist/antd.css';
import './dashboard.css';
import logo from '../assets/images/logo.jpg';
import {Link} from 'react-router-dom';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined ,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;

const Dashboard =({children,menuSelectorIndex})=>{
  const [collapsed, setCollapsed] = useState(false);
  
    return(
        <>
       <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo2"> <img src={logo} alt="Logo" style={{width:'140px',height:'80px',
        paddingLeft:'10px',paddingTop:'4px',marginLeft:"20px", borderRadius:"20px"}}/></div>
        <Menu style={{display:"block"}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${menuSelectorIndex}`]}
          items={[
              {
              key: '4',
              icon: <VideoCameraOutlined />,
              // icon: <DashboardIcon/>,
              label: 'Dashboard' , 
            },
            {
              key: '1',
              icon: <VideoCameraOutlined />,
              label: <Link to='/course'> Add Course</Link> ,
            },
            {
              key: '2',
              icon: <UploadOutlined />,
              label: <Link to='/dashboard'> Manager Courses</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to='/dashb'>Manager Users</Link>,
            },
           
          ]} > 
           </Menu>
           {/* <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      <div className="colorOption"></div></div> */}
   
       
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0, backgroundColor:"#999",
          }}
        > ,<a href="/chart" style={{color:"black "}}>
          {React.createElement (collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger ',
            
            onClick: () => setCollapsed(!collapsed), 
          })} Dashboard </a> 
        </Header>
        <Content
          className=" isOpen && site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
       
      </Layout>
    </Layout>
    
        </>
    )
}
export default Dashboard;