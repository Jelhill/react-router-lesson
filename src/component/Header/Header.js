import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-wrapper'>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about-us"><li>About Us</li></Link>
                <Link to="contact-us"><li>Contact Us</li></Link>
                <Link to="transaction/7"><li>Transactions</li></Link>
            </ul>
        </div>
    );
}

export default Header;
