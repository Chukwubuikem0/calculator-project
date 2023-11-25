import React from "react";
import './style.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-text">
                    <h1>NKEMDILIM CHIBUIKEM</h1>
                </div>
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar;