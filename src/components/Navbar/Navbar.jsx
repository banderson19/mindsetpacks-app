import React from 'react';
import { Link } from 'react-router-dom';

import MindsetBlueprintLogo from '../../assets/images/MindsetBlueprintLogo.png';
import './navbar.css';

const Navbar = () => {
    
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        fontSize: "1.5rem",
      };

    return (
        <div className="nav-bg">

        <nav className="navbar navbar-expand-lg px-5 navbar-light ">
            <div className="navbar-links_logo">
                <Link to="/"><img src={MindsetBlueprintLogo} style={{width: '200px', height: '125px'}} alt="mindsetpacks_logo" /></Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <Link to="/" style={linkStyle}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" style={linkStyle}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/MYOG" style={linkStyle}>MYOG</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contractwork" style={linkStyle}>ContractWork</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" style={linkStyle}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;