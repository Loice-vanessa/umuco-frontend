import React from "react";
import Nav from "./Navbar";
import Footer from "./Footer";



const HomeLayout=({children})=>{
    return(
<>
<Nav/>
<div style={{ minHeight:"80vh", padding:'1rem 0rem'}}>{children}</div>
<Footer/>
</>
    );
}
export default HomeLayout;