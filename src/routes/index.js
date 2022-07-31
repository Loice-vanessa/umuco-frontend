import React from "react";
import { Routes,Route } from "react-router-dom";
import AboutUs from "../views/AboutUs"


const index=()=>{
    return (
        <>
        <Routes>
            {/* <Route exact path="/"element={<Home/>}></Route> */}
            <Route exact path="/aboutUs"element={<AboutUs/>}></Route>
        </Routes>
        </>
    )
}
export default index;
