import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';


const Header = () => {
    return (
        <div>
            <div className="top-header">
            </div>
            <div className="logo">
                <Link to="/"><h1>Luxury Watches</h1></Link>
            </div>

        </div>

    )
}

export default Header;