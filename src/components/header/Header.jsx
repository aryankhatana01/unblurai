import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <svg className="yellow-grad" width="480" height="400" viewBox="0 0 1347 1162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_17_72)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M538.19 400.969C649.1 407.426 721.459 467.868 796.176 518.486C865.38 565.37 935.261 613.577 944.905 676.505C955.452 745.329 926.558 816.686 849.626 867.263C770.347 919.383 654.472 942.594 538.19 943.889C419.577 945.209 279.123 935.546 215.225 874.324C154.391 816.038 257.202 745.674 259.119 676.505C260.967 609.884 168.666 541.914 226.012 485.293C288.338 423.757 420.492 394.117 538.19 400.969Z" fill="#E2FF6F"/>
                </g>
                <defs>
                <filter id="filter0_f_17_72" x="-204" y="0" width="1551" height="1344" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_17_72"/>
                </filter>
                </defs>
            </svg>

            <h1 className='primary-heading'>Upscale your old, blurry, pixelated pictures using our AI Model for <span className="free_gradient">free</span>!</h1>
            <p className='subheading'>Simply upload your file and our AI model would process the image, upscale it and give it to you ready to download for completely free.</p>
            <div className="buttons">
                <button className='home-button'>Get Started</button>
                <button className='learn-more'>Learn More</button>
            </div>
        </div>
    )
}

export default Header;