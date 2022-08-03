import React from "react";
import { Routes,Route } from "react-router-dom";
import HomeLayout from "../components/HomeLayout";
import AboutUs from "../views/AboutUs"
import Learn from "../views/learn"
import discover from "../views/discover"


const index=()=>{
    return (
        <>
        <HomeLayout>
        <Routes>
            {/* <Route exact path="/"element={<Home/>}></Route> */}
            <Route exact path="/aboutUs"element={<AboutUs/>}></Route>
            <Route exact path="/learn"element={<Learn/>}></Route>
            <Route exact path="/discover"element={<discover/>}></Route>
        </Routes>
        </HomeLayout>
        </>
    )
}
export default index;
