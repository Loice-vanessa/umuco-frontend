import React from "react";
// import LogoFooter from '../assets/images/logo.jpg';
import {FacebookOutlined, TwitterOutlined, InstagramOutlined} from "@ant-design/icons";
import './footer.css';

const Footer=()=>{
    const date = new Date();
    let year =date.getFullYear();
    return (
        <div className="footer-content">
            <div className="logo-column">
                {/* <img src={LogoFooter} alt="" className="logo-png"></img> */}
                <div className="icons">
                <FacebookOutlined />
                <TwitterOutlined />
                <InstagramOutlined />
                </div>
            
            <p className="copyright"> copyright &copy; {year} umuco web <span>Inc, All right reserved</span></p>
            </div>
        
        <div className="acount-column">
            <h3 className="footer-title">Follow Us</h3>
            <p>623 Kacyiru st,,2nd floor, <span>kigali Rwanda</span></p>
            <p>tel:+250-789-898-410</p>
            <p>umucoweb@gmail.com</p>
        </div>
        <div className="acount-column">
        <h3 className="footer-title">Subscribe </h3>
        <p>Create Account </p>
        <p>Sign-in </p>
       </div>

        <div className="acount-column">
        <h3 className="footer-title">Our Services</h3>
        <p>Home </p>
        <p>about us</p>
        <p>learn</p>
        <p>discover</p>
        </div>

        <div className="acount-column">
        <h3 className="footer-title">Leave us comment</h3>
        <p>muco-web directory </p>
        <p>help center </p>
        <p>privacy & term </p>
        </div>
        </div>
    );
};
export default Footer;