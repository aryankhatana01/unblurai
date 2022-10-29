import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    )
}

export default Navbar;