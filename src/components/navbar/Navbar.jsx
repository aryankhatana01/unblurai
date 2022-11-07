import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import icon from '../../assets/unblurai-text-new.png';
import './navbar.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='box'>
            <div className="navbar">
                <a href="/home"><img src={icon} alt="unblurai-logo" className="logo"/></a>
                <div className="navbar__links">
                    <ul className="main-menu">
                        <li className="nav-link"><a className="nav-link-buttons" href="/home">Home</a></li>
                        <li className="nav-link"><a className="nav-link-buttons" href="/about">About</a></li>
                        <li className="nav-link"><a className="nav-link-buttons" href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div button className="navbar__button">
                    <button className="button">Get Started</button>
                </div>
                <div className="navbar-hamburger">
                    {
                        toggleMenu 
                        ? <RiCloseLine className="hamburger" size={28} onClick={() => setToggleMenu(false)} /> 
                        : <RiMenu3Line className="hamburger" size={28} onClick={() => setToggleMenu(true)} />
                    }
                    {
                        toggleMenu && (
                            <div className="navbar-hamburger-container scale-up-center">
                                <div className="navbar-hamburger-links">
                                    <ul className="main-menu-ham">
                                        <li className="nav-link-ham"><a className="nav-link-buttons-ham" href="/home">Home</a></li>
                                        <li className="nav-link-ham"><a className="nav-link-buttons-ham" href="/about">About</a></li>
                                        <li className="nav-link-ham"><a className="nav-link-buttons-ham" href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;