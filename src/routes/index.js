import React from "react";
import { Routes,Route } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";
import AboutUs from "../views/AboutUs";
import Learn from "../views/learn";
import discover from "../views/discover";
import Home from "../views/Home";
import JoinUs from "../views/JoinUs";
import LogIn from "../views/logIn";
import Coaching from "../views/userDash";
import ManagerUsers from "../views/Dashboard/ManagerUser";
import Allcourse from "../views/Dashboard/ManagerCourses";
import NewCourse from "../views/Dashboard/CreateCourses"
import Enrrol from "../views/enrrol";
import AllCourses from "../views/allCourses";

const index=()=>{
    return (
        <>
        <HomeLayout>
        <Routes>
            <Route exact path="/home"element={<Home/>}></Route>
            <Route exact path="/aboutUs"element={<AboutUs/>}></Route>
            <Route exact path="/learn"element={<Learn/>}></Route>
            <Route exact path="/allCourses"element={<AllCourses/>}></Route>
            <Route exact path="/discover"element={<discover/>}></Route>
            <Route exact path='' element={<Home/>}></Route>;
            <Route exact path='/JoinUs' element={<JoinUs/>}></Route>;
            <Route exact path='/login' element={<LogIn/>}></Route>;
            <Route exact path='/user' element={<Coaching/>}></Route>;
            <Route exact path='/dashb' element={<ManagerUsers/>}></Route>;
            <Route exact path='/dashboard' element={<Allcourse/>}></Route>;
            <Route exact path='/course' element={<NewCourse/>}></Route>;
            <Route exact path='/enrrol' element={<Enrrol/>}></Route>
        </Routes>
        </HomeLayout>
        </>
    )
}
export default index;
