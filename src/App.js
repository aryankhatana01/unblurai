import './App.css';
import React from 'react';
// import icon from './assets/unblurai-text-new.png'
// import header_image from './assets/header-image.png'
import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';


export default function App() {
  return (
    <div className="App">
      {/* <img src={icon} alt="unblurai-logo" className='logo'/> */}
      <Navbar />
      {/* <Header /> */}
      {/* <img src={header_image} alt="header-img" className='header'/> */}
    </div>
  );
}
