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
                    <br />
                    Brand Consultant / Special Projects
                </p>

                <p className="left-text-box">
                    E: hello@lauraisabella.co.uk
                    <br />                    
                    lauraisabella.co.uk
                </p>

                <div className="bio">
                    <p>A highly skilled writer, digital editor, and brand consultant; Laura Isabella has been working within the creative industries with a key focus on fashion, youth culture and championing emerging talent for the past eight years. Laura has worked both freelance and in-house for a plethora of titles, with roles including Online Editor at <span className="brand-italic">Wonderland Magazine</span> and Social Media Manager at <span className="brand-italic">The Business of Fashion</span> and <span className="brand-italic">Hunger TV</span>. She has a keen interest in working creatively on bespoke advertorial content and has previously worked on special projects for a number of luxury brands.</p>

                    <p>Dedicated to everything pop culture, Laura uses her wealth of knowledge gleaned from vast experience at youth culture titles and her love of research as a springboard for all her forward-facing work — be it editorial, branded content, consulting for brands, research, features writing, trend forecasting case studies or communications.</p>
                </div>
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