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
        
        <div className="Foll">
            <h3 className="footer-title">Follow us</h3>
            <p>623 Kacyiru st,,2nd floor, <span>kigali Rwanda</span></p>
            <p><a href="tel:+250-788-716-971" />tel:+250-789-898-410</p>
            <p><a href="mail to:webmaster@example.com" />umucoweb@gmail.com</p>
        </div>
        <div className="acount-column">
        <h3 className="footer-title">subscribe to our news</h3>
        <p><a href="#">Create Account </a></p>
        <p><a href="#">Sign-in </a></p>
       </div>

        <div className="acount-column">
        <h3 className="footer-title">our services</h3>
        <p><a href="#">Home </a></p>
        <p><a href="#">about us</a></p>
        <p><a href="#">learn</a></p>
        <p><a href="#">discover</a></p>
        </div>

        <div className="acount-column">
        <h3 className="footer-title">leave us comment</h3>
        <p><a href="#">muco-web directory </a></p>
        <p><a href="#">help center </a></p>
        <p><a href="#">privacy & term </a></p>
        </div>
        </div>
    );
};
export default Footer;