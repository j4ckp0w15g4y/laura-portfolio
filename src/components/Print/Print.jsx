import React, { Component } from 'react';
import './Print.css'
import LauraHeroDigital from '../../laura-isabella-two.svg';
import CameronDallasPdf from '../../Assets/cameron-dallas.pdf'
import DanaPdf from '../../Assets/DANA.pdf'
import JHusPdf from '../../Assets/j-hus.pdf'
import MaxWhitPdf from '../../Assets/max-whitlock.pdf'
import NeonDemonPdf from '../../Assets/neon-demon.pdf'
import SlavaPdf from '../../Assets/slava.pdf'
import SimiHazePdf from '../../Assets/SimiHaze.pdf'

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

                <a className="project-link" href={JHusPdf} target="_blank" rel="noopener noreferrer"> 
                <div className="total-project">
                    <span className="projects-list first-entry ">
                        J HUS                        </span>
                    <div className="first-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="first-entry column-label-right">
                        <span>
                            2018
                            </span>                            
                    </div>                                        
                </div>
                </a>

                
                <a className="project-link" href={DanaPdf} target="_blank" rel="noopener noreferrer"> 
                <div className="">
                    <span className="projects-list second-entry ">
                        Dana
                        </span>
                    <div className="second-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="second-entry column-label-right">
                        <span>
                            2018
                            </span>
                    </div>
                </div>
                </a>

                <a className="project-link" href={MaxWhitPdf} target="_blank" rel="noopener noreferrer"> 
                <div className="">
                    <span className="projects-list third-entry">
                        Max Whitlock
                        </span>
                    <div className="third-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="third-entry column-label-right">
                        <span>
                            2018
                            </span>
                    </div>
                </div>
                </a>

                <a className="project-link" href={SimiHazePdf} target="_blank" rel="noopener noreferrer"> 
                <div className="">
                    <span className="projects-list fourth-entry">
                        Simi Haze
                            </span>
                    <div className="fourth-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="fourth-entry column-label-right">
                        <span>
                            2018
                            </span>
                    </div>
                </div>
                </a>

                <a className="project-link" href={NeonDemonPdf} target="_blank" rel="noopener noreferrer"> 
                <div className="">
                    <span className="projects-list fifth-entry">
                       Neon Demon   
                        </span>
                    <div className="fifth-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="fifth-entry column-label-right">
                        <span>
                            2018
                            </span>
                    </div>
                </div>
                </a>

                <a className="project-link" href={SlavaPdf} target="_blank" rel="noopener noreferrer"> 
                <div className="">
                    <span className="projects-list sixth-entry">
                        Slava Magutin
                        </span>
                    <div className="sixth-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="sixth-entry column-label-right">
                        <span>
                            2018
                            </span>
                    </div>
                </div>
                </a>

                <div className="">
                    <span className="projects-list seventh-entry">
                        Last Japan
                        </span>
                    <div className="seventh-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="seventh-entry column-label-right">
                        <span>
                            2018
                            </span>
                    </div>

                </div>

                <a className="project-link" href={CameronDallasPdf} target="_blank" rel="noopener noreferrer"> 
                <div className="">
                    <span className="projects-list eighth-entry">
                        Cameron Dallas
                        </span>
                    <div className="eighth-entry column-label-left">
                        <span className="client-list">
                            WONDERLAND
                        </span>
                    </div>
                    <div className="eighth-entry column-label-right">
                        <span>
                            2018
                            </span>
                    </div>
                </div>
                </a>
                <img 
                    src={svgPathTwo}
                    className="laura-font-digital"                    
                    alt="website logo"/>
            </div>
        );
    }
}

export default Print;