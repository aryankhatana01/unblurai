import React from "react";
import './banner.css';


const  Banner = () => {
    return (
        <a href="/home">
            <div className="banner">
                <p className="donation">This project is completely free to use, but if you wish to donate - click here!</p>
            </div>
        </a>
    )
}

export default Banner;