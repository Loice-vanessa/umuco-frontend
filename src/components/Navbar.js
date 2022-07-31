import React from "react"
import"./NavBar.css";
import logo from "../assets/images/logo.jpg"
const NavBar=()=>{
    return(
        <div className="container">
            <img src={logo} alt="logo img" className="logo-img"/>
        <ul className="nav-links">
            <li><a href="/home" className="nav-link">Home</a></li>
            <li><a href="/aboutUs" className="nav-link">about us</a></li>
            <li><a href="/learn" className="nav-link">learn</a></li>
            <li><a href="/discover" className="nav-link">discover</a></li>
        </ul>
        <div className="content">
        
            <button className="btn"><a href="/home" className="nav-link">log in</a></button>
        
            <button className="btn"><a href="/about-us" className="nav-link">join us</a></button>
    
        </div>
        <div>
            <img src="" alt=""></img>
        </div>
        </div>
        
    )
}
export default NavBar;