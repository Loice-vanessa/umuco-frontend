import React from "react";
import Nav from "./Navbar";
import Footer from "./Footer";



const HomeLayout=({children})=>{
    return(
<>
<Nav/>
<div style={{ minHeight:"80vh"}}>{children}</div>
<Footer/>
</>
    );
}
export default HomeLayout;