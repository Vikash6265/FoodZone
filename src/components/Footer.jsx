import React from 'react'
import foodZone from '../assets/foodZone.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">

        <img src={foodZone} alt="" />

        <ul>
            <li><h2>Company</h2></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">FoodZone</a></li>
        </ul>

        <ul>
            <li><h2>Contact us</h2></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Ride with us</a></li>
        </ul>

        <ul>
            <li><h2>Legal</h2></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Investor Relations</a></li>
        </ul>

    </div>
  )
}

export default Footer;
