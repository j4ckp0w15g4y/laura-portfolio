import React, { Component } from 'react';
import LauraHeroDigital from '../../laura-isabella-two.svg';
import JHusOne from '../../Assets/j-hus-1.png'
import JHusTwo from '../../Assets/j-hus-2.png'
import DanaOne from '../../Assets/dana-1.png'
import MaxWhitOne from '../../Assets/max-whitlock-1.png'
import MaxWhitTwo from '../../Assets/max-whitlock-2.png'
import MaxWhitThree from '../../Assets/max-whitlock-3.png'
import MaxWhitFour from '../../Assets/max-whitlock-4.png'
import MaxWhitFive from '../../Assets/max-whitlock-5.png'
import MaxWhitSix from '../../Assets/max-whitlock-6.png'
import SimiHazeOne from '../../Assets/simi-haze-1.png'
import SimiHazeTwo from '../../Assets/simi-haze-2.png'
import SimiHazeThree from '../../Assets/simi-haze-3.png'
import SimiHazeFour from '../../Assets/simi-haze-4.png'
import NeonDemonOne from '../../Assets/neon-demon-1.png'
import SlavaOne from '../../Assets/slava-1.png'
import LastJapanOne from '../../Assets/last-japan-1.png'
import CameronDallasOne from '../../Assets/cameron-dallas-1.png'
import CameronDallasTwo from '../../Assets/cameron-dallas-2.png'
import CameronDallasThree from '../../Assets/cameron-dallas-3.png'
import CameronDallasFour from '../../Assets/cameron-dallas-4.png'
import WalterVBOne from '../../Assets/walter-vb-1.png'
import WalterVBTwo from '../../Assets/walter-vb-2.png'
import WalterVBThree from '../../Assets/walter-vb-3.png'
import WalterVBFour from '../../Assets/walter-vb-4.png'
import BebeRexhaOne from '../../Assets/bebe-rexha-1.png'
import BebeRexhaTwo from '../../Assets/bebe-rexha-2.png'
import BebeRexhaThree from '../../Assets/bebe-rexha-3.png'


class Print extends Component {
    constructor() {
        super();
        this.state = {
            showing: false,
            showingTwo: false,
            showingThree: false,
            showingFour: false,
            showingFive: false,
            showingSix: false, 
            showingSeven: false,
            showingEight: false, 
            showingNine: false,
            showingTen: false
        };
    }
    render() {
        const svgPathTwo = `${LauraHeroDigital}`;
        const showing = this.state.showing;      
        const showingTwo = this.state.showingTwo;
        const showingThree = this.state.showingThree;
        const showingFour  = this.state.showingFour;
        const showingFive  = this.state.showingFive;
        const showingSix = this.state.showingSix;
        const showingSeven  = this.state.showingSeven;
        const showingEight = this.state.showingEight;
        const showingNine  = this.state.showingNine;
        const showingTen  = this.state.showingTen;

        return (
            <div className="print-container">
            <div className="content-wrap">
                <div>
                    <span className="title-heading" id="project-header">Project</span>
                    <div className="column-label-left title-heading">
                        <span className="client-list">Client</span>
                    </div>                    
                </div>

                <div className="projects-underline"></div>                                                                                                                                                                                                                                                
                <div className="projects-table">
                <div onClick={() => this.setState({ showing: !showing })}>  
                        <div className="project">
                            <span>J HUS</span>
                            <span className="client-column">Wonderland</span>                            
                        </div>   
                        {
                        showing 
                        ? <div><img src={JHusOne} className="project-image-landscape"></img> <img src={JHusTwo} className="project-image-landscape"></img></div>
                        : null
                        }                      
                    </div>
                
                <div onClick={() => this.setState({ showingTwo: !showingTwo })}> 
                        <div className="project">
                            <span>Dana</span>
                            <span className="client-column">Wonderland</span>                            
                        </div>
                        {
                        showingTwo 
                        ? <div><img src={DanaOne} className="project-image-landscape"></img></div>
                        : null
                        }    
                    </div>

                    <div onClick={() => this.setState({ showingThree: !showingThree })}> 
                    <div className="project">
                        <span>Max Whitlock</span>
                        <span className="client-column">Wonderland</span>                        
                    </div>
                    {
                        showingThree
                        ? <div>
                        <img src={MaxWhitOne} className="project-image-landscape"></img> 
                        <img src={MaxWhitTwo} className="project-image-landscape"></img> 
                        <img src={MaxWhitThree} className="project-image-landscape"></img>
                        <img src={MaxWhitFour} className="project-image-landscape"></img>
                        <img src={MaxWhitFive} className="project-image-landscape"></img>
                        <img src={MaxWhitSix} className="project-image-landscape"></img>
                        </div>
                        : null
                        }   
                    </div>

                    <div onClick={() => this.setState({ showingFour: !showingFour })}> 
                    <div className="project">
                        <span>Simi Haze</span>
                        <span className="client-column">Wonderland</span>                    
                    </div>
                    {
                        showingFour 
                        ? <div>
                        <img src={SimiHazeOne} className="project-image-landscape"></img> 
                        <img src={SimiHazeTwo} className="project-image-landscape"></img> 
                        <img src={SimiHazeThree} className="project-image-landscape"></img>
                        <img src={SimiHazeFour} className="project-image-landscape"></img>                        
                        </div>
                        : null
                        }    
                    </div>

                    <div onClick={() => this.setState({ showingFive: !showingFive })}>
                    <div className="project">
                        <span>Neon Demon</span>
                        <span className="client-column">Wonderland</span>                        
                    </div>
                    {
                        showingFive 
                        ? <div><img src={NeonDemonOne} className="project-image-landscape"></img></div>
                        : null
                        }   
                    </div>

                    <div onClick={() => this.setState({ showingSix: !showingSix })}>
                    <div className="project">
                        <span>Slava Magutin</span>
                        <span className="client-column">Wonderland</span>                        
                    </div>
                    {
                        showingSix 
                        ? <div><img src={SlavaOne} className="project-image-landscape"></img></div>
                        : null
                        }   
                    </div>

                    <div onClick={() => this.setState({ showingSeven: !showingSeven })}>
                    <div className="project">
                        <span>Last Japan</span>
                        <span className="client-column">Wonderland</span>                        
                    </div>
                    {
                        showingSeven 
                        ? <div><img src={LastJapanOne} className="project-image-portrait"></img></div>
                        : null
                        } 
                    </div>

                    <div onClick={() => this.setState({ showingEight: !showingEight })}>
                    <div className="project">
                        <span>Cameron Dallas</span>
                        <span className="client-column">Wonderland</span>                        
                    </div>
                    {
                        showingEight 
                        ? <div>
                        <img src={CameronDallasOne} className="project-image-landscape"></img> 
                        <img src={CameronDallasTwo} className="project-image-landscape"></img> 
                        <img src={CameronDallasThree} className="project-image-landscape"></img>
                        <img src={CameronDallasFour} className="project-image-landscape"></img>                        
                        </div>
                        : null
                        }    
                    </div>

                    <div onClick={() => this.setState({ showingNine: !showingNine })}> 
                        <div className="project">
                            <span>Walter Van Beirendonck</span>
                            <span className="client-column">Wonderland</span>                            
                        </div>
                        {
                        showingNine 
                        ? <div>
                        <img src={WalterVBOne} className="project-image-landscape"></img> 
                        <img src={WalterVBTwo} className="project-image-landscape"></img> 
                        <img src={WalterVBThree} className="project-image-landscape"></img>
                        <img src={WalterVBFour} className="project-image-landscape"></img>                        
                        </div>
                        : null
                        }
                    </div>

                    <div onClick={() => this.setState({ showingTen: !showingTen })}> 
                        <div className="project">
                            <span>Bebe Rexha</span>
                            <span className="client-column">Wonderland</span>                            
                        </div>
                    </div>
                    {
                        showingTen 
                        ? <div>
                        <img src={BebeRexhaOne} className="project-image-landscape"></img> 
                        <img src={BebeRexhaTwo} className="project-image-landscape"></img> 
                        <img src={BebeRexhaThree} className="project-image-landscape"></img>                        
                        </div>
                        : null
                        }

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