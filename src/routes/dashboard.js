import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../component/DashboardLayout'
import Alltour from '../views/Dashboard/AllCourses';
import NewTour from '../views/Dashboard/CreateCourses';

const IndexDash =()=>{
    return (
        < Dashboard>
        <Routes>
            <Route exact path='/dashboard' element={<Alltour/>}></Route>;
            <Route exact path='/dashboard-admin' element={<NewTour/>}></Route>;
        
        </Routes>
     </Dashboard>
       );
    }
     export default IndexDash;