import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <a href="#"><span className="home">Home</span></a>
                <a href="#"><span className="about">About Us</span></a>
                <a href="#"><span className="contact">Contact Us</span></a>
            </div>
        </div>
    )
}

export default Navbar;