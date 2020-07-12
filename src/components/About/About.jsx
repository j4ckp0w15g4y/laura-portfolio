import React, { Component } from 'react';
import './About.css'
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac eros a nisi porttitor congue. Donec aliquet hendrerit elit quis ornare. Etiam nec finibus dolor, ut ultrices augue. Sed eget sapien ut leo dictum bibendum posuere id eros. Morbi sit amet libero sit amet nibh egestas blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis augue sed cursus elementum. Quisque placerat ante vitae purus ullamcorper congue. Morbi eleifend odio dolor, vel tincidunt nisi gravida et. Nulla interdum sit amet elit vitae molestie. Nullam consequat quis leo sit amet commodo. In consequat bibendum vehicula. Praesent aliquet, neque nec maximus dictum, massa dolor tristique tortor, ut pellentesque nulla libero non turpis.</p>

                    <p>Morbi at porta dolor, vel consectetur augue. Mauris nec pellentesque augue. Proin aliquam fringilla urna vel accumsan. Praesent dapibus nunc a euismod aliquam. Nunc ac mattis nisl. Curabitur non mollis magna. Ut placerat urna dignissim sodales venenatis. Vestibulum molestie, nunc eget hendrerit malesuada, dui est ultrices eros, at ornare odio ante a arcu. Donec quam ipsum, placerat a dolor eget, semper porta ipsum.</p>
                </div>
                <img 
                    src={svgPathThree}
                    className="laura-font-about"                    
                    alt="website logo"/>
            </div>
        );
    }
}

export default About;