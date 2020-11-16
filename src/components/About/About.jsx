import React, { Component } from 'react';
import LauraHeroDigital from '../../laura-isabella-two.svg';

class About extends Component {
    render() {
        const svgPathThree = `${LauraHeroDigital}`;
        return (
            <div className="about">
                <div className="info">
                    <p>Laura Isabella</p>
                    <p>Freelance Writer and Digital Editor</p>
                    <p>Brand Consultant / Special Projects</p>
                </div>

                <div className="left-text-box">
                    <p>E: hello@lauraisabella.co.uk</p>
                    <p>M: +447834222219</p>
                    <p>lauraisabella.co.uk</p>
                </div>

                <div className="bio">
                    <p>A highly skilled writer, digital editor, and brand consultant; Laura Isabella has been working within the creative industries with a key focus on fashion, youth culture and championing emerging talent for the past eight years. Laura has worked both freelance and in-house for a plethora of titles, with roles including Online Editor at <span className="brand-italic">Wonderland Magazine</span> and Social Media Manager at <span className="brand-italic">The Business of Fashion</span> and <span className="brand-italic">Hunger TV</span>. She has a keen interest in working creatively on bespoke advertorial content and has previously worked on special projects with brands including <span className="brand-italic">Chanel</span>, <span className="brand-italic">Dior</span>, <span className="brand-italic">Gucci</span>, <span className="brand-italic">Miu Miu</span>, and <span className="brand-italic">McQ</span>.</p>

                    <p>Dedicated to everything pop culture, Laura uses her wealth of knowledge gleaned from vast experience at youth culture titles and her love of research as a springboard for all her forward-facing work — be it editorial, branded content, consulting for brands, research, features writing, trend forecasting case studies or communications.</p>
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