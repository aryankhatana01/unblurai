import './App.css';
import React from 'react';
import icon from './assets/unblurai-text-new.png'
import Navbar from './components/navbar/Navbar';


export default function App() {
  return (
    <div className="App">
      <img src={icon} alt="unblurai-logo" className='logo'/>
      <Navbar />
    </div>
  );
}
