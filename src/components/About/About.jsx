import React, { Component } from 'react';
import LauraHeroDigital from '../../LI_Logo_Black.svg';

class About extends Component {
    render() {
        const svgPathThree = `${LauraHeroDigital}`;
        return (
            <div className="about-container">
                        <div className="content-wrap">

                <p className="info">
                   <span className="laura-name"> Laura Isabella</span>
                    <br />
                    Freelance Writer and Digital Editor
                </p>

                <p className="left-text-box">
                    E: hello@lauraisabella.co.uk
                    <br />                    
                    lauraisabella.co.uk
                </p>
                </div>
                <img
                    src={svgPathThree}
                    className="laura-font-about"
                    alt="website logo" />
            </div>
        );
    }
}

export default About;