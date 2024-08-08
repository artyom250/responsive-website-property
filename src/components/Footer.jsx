import React from 'react';
import "../styles/Footer.css";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Footer() {
  return (
    <div className='block' id='contact'>
        <div className="headFlex second">
            <p className='blockNumber'>(06)</p>
            <div className='overviewBlock'>
                <div className='contactFlex'>
                    <div>
                        <p className='headTitle'>Contact</p>
                        <p className='headDesc'>Reach Out, Connect, and Start Your Path to Home</p>
                    </div>
                    <div>
                        <p className='headTitle tw'>Looking for Expedited Assistance?</p>
                        <a href="#" className='contact-link'>+1 (405) 288-2248</a>
                        <br />
                        <a href="#" className='contact-link'>hello@newhouse.com</a>
                    </div>
                </div>
            </div>
            <form>
                <input type="text" placeholder='First Name' required />
                <input type="text" placeholder='Last Name' required />
                <input type="email" placeholder='Email' required />
                <input type="number" placeholder='Phone' required />
                <textarea placeholder='How can we help you?' required></textarea>
                <button type='submit'>Send message</button>
            </form>
        </div>
        <footer>
            <a href="#" className="logo">• 1936 Redcliff</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#plan">Plan</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#realtor">Realtor</a></li>
            </ul>
            <div className="socials">
                <a href="#"><i><BiLogoFacebookCircle /></i></a>
                <a href="#"><i><BiLogoTwitter /></i></a>
                <a href="#"><i><BiLogoLinkedinSquare /></i></a>
            </div>
        </footer>
    </div>
  )
}

export default Footer