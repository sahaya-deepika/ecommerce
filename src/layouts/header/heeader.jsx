import { useState } from 'react';
import './heeader.css';
import logo from '../../assets/logo.webp';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handlesearch = () => {
        console.log("search clicked");
    }

    const handleprofile = () => {
        console.log("profile clicked");
    }

    const handlecart = () => {
        console.log("cart clicked");
    }

    return (
        <header className="header">

            <div className="top-header">
                <span className="gift">🎁</span>
                <div className="offer-text">
                    Get exclusive Deals Only on WhatsApp
                    <br />
                    Channel - Join Now
                </div>
            </div>

            <div className="main-header">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#" onClick={() => setMenuOpen(false)}>Products</a>
                    <a href="#" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>

                <div className="icons">
                    <FaSearch className="icon" onClick={handlesearch} />
                    <FaUser className="icon" onClick={handleprofile} />
                    <FaShoppingCart className="icon" onClick={handlecart} />
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

        </header>
    );
}

export default Header;