import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="header-nav">
                    <div className="rectangle one"><Link to='/' className="about-item header-item">About</Link></div>
                    <div className="rectangle two"><Link to='/digital' className="digital-item header-item">Selected Digital</Link></div>
                    <div className="rectangle three"><Link to='/print' className="print-item header-item">Selected Print</Link></div>
                </nav>
            </div>
        );
    }
}

export default Header;