import React from "react";
import { Link } from "react-router-dom";
import enigma_sensuality from './../assets/images/enigma_sensuality.png'
import './Header.css'

const Header =() => {
    return(
        <header className="header">
            <div className="logo">
            <Link to="/">
                <div className="banner-content">
                </div>
            </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to={"/"}>INICIO</Link></li>
                    <li><Link to={"products"}>PRODUCTOS</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;