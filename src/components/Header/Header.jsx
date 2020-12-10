import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="header-nav">
              <Link to='/'> <div className="rectangle one"><div className="about-item header-item">About</div></div></Link>
                  <Link to='/digital'><div className="rectangle two"> <div className="digital-item header-item">Selected Digital</div></div></Link>
                   <Link to='/print'> <div className="rectangle three"> <div className="print-item header-item">Selected Print</div></div></Link>
                </nav>
            </div>
        );
    }
}

export default Header;