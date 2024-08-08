import React from 'react';
import { useState } from 'react';
import "../styles/Navbar.css";

import { BiGridAlt } from "react-icons/bi";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const sideFunc = () => { setSidebar(!sidebar) }

  return (
    <div className='Navbar'>
      <nav>
        <a href="#" className="logo">• 1936 Redcliff</a>
        <ul className={sidebar ? "show" : ""}>
            <li><a href="#" onClick={sideFunc}>Home</a></li>
            <li><a href="#overview" onClick={sideFunc}>Overview</a></li>
            <li><a href="#gallery" onClick={sideFunc}>Gallery</a></li>
            <li><a href="#plan" onClick={sideFunc}>Plan</a></li>
            <li><a href="#features" onClick={sideFunc}>Features</a></li>
            <li><a href="#realtor" onClick={sideFunc}>Realtor</a></li>
            <li><a href="#realtor" onClick={sideFunc}>Contact</a></li>
        </ul>
        <a href="#contact" className="contact">Contact</a>
        <i className='toggle' onClick={sideFunc}><BiGridAlt /></i>
      </nav>
    </div>
  )
}

export default Navbar