import './App.css';
import React from 'react';
import icon from './assets/unblurai-text-new.png'
import Navbar from './components/navbar/Navbar';


export default function App() {
  return (
    <div className="App">
      <img src={icon} alt="unblurai-logo" className='logo'/>
      <Navbar />
      <h1 className='primary-heading'>Unblur your old blurry pictures using our AI Model for free!</h1>
      <div className='sketch'>
        <svg width="105" height="40" viewBox="0 0 156 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50002 37.5C-32.5001 13.5 192 -9.50024 148 9.49994" stroke="url(#paint0_linear_2_15)" stroke-width="4"/>
          <defs>
          <linearGradient id="paint0_linear_2_15" x1="78.7632" y1="5.25085" x2="78.7632" y2="37.0002" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0abfdb"/>
          <stop offset="1" stop-color="#4933C7" stop-opacity="0.62"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <p className='subheading'>Simply upload your file and our AI model would process the image, upscale it and give it to you ready to download for completely free.</p>
      <button className='home-button'>Get Started</button>
      <button className='learn-more'>Learn More</button>
    </div>
  );
}
