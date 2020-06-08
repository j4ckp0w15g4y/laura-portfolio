import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="header-nav">
                    <ul>
                        <div className="rectangle one"><li><Link to='/' className="about-item header-item">About</Link></li></div>
                       <div className="rectangle two"><li><Link to='/digital' className="digital-item header-item">Digital</Link></li></div>
                       <div className="rectangle three"><li><Link to='/print' className="print-item header-item">Print</Link></li></div>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;