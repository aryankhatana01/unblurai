import './App.css';
import React from 'react';
// import icon from './assets/unblurai-text-new.png'
// import header_image from './assets/header-image.png'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';


export default function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Header />
      {/* <img src={header_image} alt="header-img" className='header'/> */}
    </div>
  );
}
