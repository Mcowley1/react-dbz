import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <h2 className="logo">Logo</h2>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
            >
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>
                <Link to="/zfighters" className="zfighters">
                    <li>Zfighters</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>Contact</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
            >
             {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bar"></i>}
            </button>
        </nav>

    );
}

export default Navbar;