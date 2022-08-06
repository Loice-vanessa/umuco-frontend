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


const index=()=>{
    return (
        <>
        <HomeLayout>
        <Routes>
            {/* <Route exact path="/"element={<Home/>}></Route> */}
            <Route exact path="/aboutUs"element={<AboutUs/>}></Route>
            <Route exact path="/learn"element={<Learn/>}></Route>
            <Route exact path="/discover"element={<discover/>}></Route>
            <Route exact path='' element={<Home/>}></Route>;
            <Route exact path='/JoinUs' element={<JoinUs/>}></Route>;
            <Route exact path='/login' element={<LogIn/>}></Route>;
            <Route exact path='/user' element={<Coaching/>}></Route>;
        </Routes>
        </HomeLayout>
        </>
    )
}
export default index;
