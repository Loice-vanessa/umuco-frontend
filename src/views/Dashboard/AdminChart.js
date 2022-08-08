import React from 'react';
import Dashboard from '../../component/DashboardLayout';
import Widgets from '../../component/widgets/Widgets';
import "./adminChart.css";
import ChartBar from './ChartBar.js';
import AppPie from './PieChart';
const AdminChart = () => (
           <>
           <Dashboard>
           
            <div className='widgets'>
            <Widgets type="User" />
            <Widgets type="TotalOrder"/>
            <Widgets type="Price"className='leftW'/>
            <Widgets type="TotalEarning"/></div>
            <div className='pie' style={{display:'flex'}}>
            <ChartBar/>
            <AppPie/>
            </div>
            </Dashboard>
            </>
    );

export default AdminChart;