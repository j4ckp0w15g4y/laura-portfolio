import React, { Component } from 'react';
import './Print.css'
import LauraHeroDigital from '../../laura-isabella-two.svg';


class Print extends Component {
    render() {
        const svgPathTwo = `${LauraHeroDigital}#svgView(preserveAspectRatio(none))`;
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
                <img 
                    src={svgPathTwo}
                    className="laura-font-digital"                    
                    alt="website logo"/>
            </div>
        );
    }
}

export default Print;