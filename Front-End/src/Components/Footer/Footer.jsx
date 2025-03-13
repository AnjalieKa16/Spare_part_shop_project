import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>

            <div className='footer-content-left'>
            <img src={assets.logosparep} alt=''/>
            <p>Prasad Mortors.lk is an online Car Accessories, Car Care and Auto Parts Store in Sri Lanka. With aim to provide the highest quality branded and imported products to Car enthusiasts in Sri Lanka.</p>

                <div className='footer-social-icons'>
                    <img src={assets.facebookIcon2} />
                </div>

            </div>

            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            <div className='footer-content-right'>
                <h2> Get In Touch</h2>
                <ul>
                    <li>+94 774502587</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
        </div>

        <hr/>
        <p className='footer-copyright'>2025 Prasad Motors. All rights reserved.</p>
    </div>
  )
}

export default Footer