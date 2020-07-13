import React, { Component } from 'react';
import './Digital.css'
import LauraHeroDigital from '../../laura-isabella-two.svg';

class Digital extends Component {
    render() {
        const svgPath = `${LauraHeroDigital}`;
        return (
            <div className="digital">
                <div>
                    <span className="title-heading" id="project-header">Project</span>
                    <div className="column-label-left title-heading">
                        <span className="client-list">Client</span>
                    </div>
                    <div className="column-label-right title-heading">
                        <span className="year-list" >Year</span>
                    </div>
                </div>

            <div className="projects-table">
                <div className="project">
                    <span>Christo Geoghan Explores Deadly Accusations Of Witchcraft Amongst A Remote Healer Community</span>
                    <div className="client-column">
                    <span>It's Nice That</span>
                    </div>                
                    <span className="year-column">2018</span>
                </div>

            </div>


                <div className="projects-underline"></div>                                   
                    <img 
                    src={svgPath}
                    className="laura-font-digital"                    
                    alt="website logo"/>
                    
                </div>
        ); 
    }
}

export default Digital;