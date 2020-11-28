import React, { Component } from 'react';
import LauraHeroDigital from '../../laura-isabella-two.svg';


class Footer extends Component {
    render() {
                const svgPathThree = `${LauraHeroDigital}`;
        return (
            <div>
                <img
                    src={svgPathThree}                    
                    alt="website logo" />
            </div>
        );
    }
}

export default Footer;