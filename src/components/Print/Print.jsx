import React, { Component } from 'react';
import LauraHeroDigital from '../../laura-isabella-two.svg';
import CameronDallasPdf from '../../Assets/cameron-dallas.pdf'
import DanaPdf from '../../Assets/DANA.pdf'
import JHusPdf from '../../Assets/j-hus.pdf'
import MaxWhitPdf from '../../Assets/max-whitlock.pdf'
import NeonDemonPdf from '../../Assets/neon-demon.pdf'
import SlavaPdf from '../../Assets/slava.pdf'
import SimiHazePdf from '../../Assets/SimiHaze.pdf'
import LastJapanPdf from '../../Assets/last-japan.pdf'

class Print extends Component {
    render() {
        const svgPathTwo = `${LauraHeroDigital}`;
        return (
            <div className="print">
                <div>
                    <span className="title-heading" id="project-header">Project</span>
                    <div className="column-label-left title-heading">
                        <span className="client-list">Client</span>
                    </div>
                    <div className="column-label-right title-heading">
                        <span className="year-list" >Year</span>
                    </div>
                </div>

                <div className="projects-underline"></div>                                                                                                                                                                                                                                                

                <div className="projects-table">
                <a className="link-edit" href={JHusPdf} target="_blank" rel="noopener noreferrer">  
                        <div className="project">
                            <span>J HUS</span>
                            <span className="client-column">WONDERLAND</span>
                            <span className="year-column">2018</span>
                        </div>
                    </a>

                    <a className="link-edit" href={DanaPdf} target="_blank" rel="noopener noreferrer">                 
                        <div className="project">
                            <span>Dana</span>
                            <span className="client-column">WONDERLAND</span>
                            <span className="year-column">2018</span>
                        </div>
                    </a>

                    <a className="link-edit" href={MaxWhitPdf} target="_blank" rel="noopener noreferrer">                 
                    <div className="project">
                        <span>Max Whitlock</span>
                        <span className="client-column">WONDERLAND</span>
                        <span className="year-column">2018</span>
                    </div>
                    </a>

                    <a className="link-edit" href={SimiHazePdf} target="_blank" rel="noopener noreferrer">  
                    <div className="project">
                        <span>Simi Haze</span>
                        <span className="client-column">WONDERLAND</span>
                        <span className="year-column">2018</span>
                    </div>
                    </a>

                    <a className="link-edit" href={NeonDemonPdf} target="_blank" rel="noopener noreferrer"> 
                    <div className="project">
                        <span>Neon Demon</span>
                        <span className="client-column">WONDERLAND</span>
                        <span className="year-column">2018</span>
                    </div>
                    </a>

                    <a className="link-edit" href={SlavaPdf} target="_blank" rel="noopener noreferrer">                 
                    <div className="project">
                        <span>Slava Magutin</span>
                        <span className="client-column">WONDERLAND</span>
                        <span className="year-column">2018</span>
                    </div>
                    </a>

                    <a className="link-edit" href={LastJapanPdf} target="_blank" rel="noopener noreferrer">
                    <div className="project">
                        <span>Last Japan</span>
                        <span className="client-column">WONDERLAND</span>
                        <span className="year-column">2018</span>
                    </div>
                    </a>

                    <a className="link-edit" href={CameronDallasPdf} target="_blank" rel="noopener noreferrer">
                    <div className="project">
                        <span>Cameron Dallas</span>
                        <span className="client-column">WONDERLAND</span>
                        <span className="year-column">2018</span>
                    </div>
                    </a>

                </div>
                




                <img 
                    src={svgPathTwo}
                    className="laura-font-digital"                    
                    alt="website logo"/>
            </div>
        );
    }
}

export default Print;