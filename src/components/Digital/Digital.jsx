import React, { Component } from 'react';
import LauraHeroDigital from '../../LI_Logo_Black.svg';

class Digital extends Component {
    render() { 
        const svgPath = `${LauraHeroDigital}`;       
        return (
            <div className="digital-container">
            <div className="content-wrap">
                <div>
                    <span className="title-heading" id="project-header">Project</span>
                    <div className="column-label-left title-heading">
                        <span className="client-list">Client</span>
                    </div>                                                            
                </div>

                <div className="projects-underline"></div>
                <div className="projects-table">

                <a href="https://www.dazeddigital.com/fashion/article/42281/1/radical-greek-designer-fashion-saint-martins-female-wetness-collection" className="link-edit" target="_blank">
                    <div className="project">
                        <span>The radical Greek designer exploring the concept of female wetness</span>
                        <span className="client-column">Dazed</span>                        
                    </div>
                    </a>

<a href="https://i-d.vice.com/en_uk/article/vbqjb9/casting-so-important-at-the-latest-mens-fashion-week" className="link-edit" target="_blank">
                    <div className="project">
                        <span>why was casting so important at the latest london men's fashion week?</span>
                        <span className="client-column">i-D</span>                        
                    </div>
                    </a>

                    <a href="https://www.itsnicethat.com/articles/christo-geoghegan-banished-of-balsapuerto-photography-311018" className="link-edit" target="_blank">
                        <div className="project">
                            <span>Christo Geoghan Explores Deadly Accusations Of Witchcraft Amongst A Remote Healer Community</span>
                            <span className="client-column">It's Nice That</span>                            
                        </div>
                    </a>

                    <a href="https://theculturetrip.com/north-america/usa/articles/these-are-the-new-feminist-writers-owning-the-digital-age/" className="link-edit" target="_blank">
                        <div className="project">
                            <span>These Are the New Feminist Writers Owning the Digital Age</span>
                            <span className="client-column">Culture Trip</span>
                        </div>
                    </a> 

                     

                    <a href="https://www.itsnicethat.com/articles/eddie-wrey-adjame-photography-091118" className="link-edit" target="_blank">
                        <div className="project">
                            <span>Eddie Wrey photographs the women of West African market Adjamé</span>
                            <span className="client-column">It's Nice That</span>                            
                        </div>
                    </a>

                    <a href="https://www.itsnicethat.com/articles/matter-magazine-headway-publication-world-mental-health-day-101018" className="link-edit" target="_blank">
                    <div className="project">
                        <span>Matter is the inclusive magazine that treats brain injury with grace and good humour</span>
                        <span className="client-column">It's Nice That</span>                        
                    </div>
                    </a>

                     

                    <a href="https://www.itsnicethat.com/articles/ryan-otoole-collett-portrait-kenya-photography-140618" className="link-edit" target="_blank">
                    <div className="project">
                        <span>Ryan O’Toole Collett’s portrait series in Kenya bridges the gap between photographer and subject</span>
                        <span className="client-column">It's Nice That</span>                        
                    </div>
                    </a>

                    <a href="https://www.itsnicethat.com/features/richard-haines-fashion-illustration-020317" className="link-edit" target="_blank">
                    <div className="project">
                        <span>A lesson in authenticity: the work of fashion illustrator Richard Haines</span>
                        <span className="client-column">It's Nice That</span>                        
                    </div>
                    </a>

                     <a href="http://hero-magazine.com/article/110098/we-talk-to-pussy-riot-about-art-protest-and-shutting-down-putin/" className="link-edit" target="_blank">
                        <div className="project">
                            <span>We talk to Pussy Riot about art protest and shutting down Putin</span>
                            <span className="client-column">Hero</span>
                        </div>
                    </a>

                    <a href="https://www.itsnicethat.com/articles/alexandra-leese-women-of-wales-photography-061118" className="link-edit" target="_blank">
                    <div className="project">
                        <span>Alexandra Leese shoots a series of characterful Welsh Nans for Helmut Lang</span>
                        <span className="client-column">It's Nice That</span>                        
                    </div>
                    </a>

                    <a href="https://www.huckmag.com/art-and-culture/photography-2/coming-age-cambodias-young-buddhist-monks/" className="link-edit" target="_blank">
                        <div className="project">
                            <span>Coming of age with Cambodia’s young Buddhist monks</span>
                            <span className="client-column">Huck</span>
                        </div>
                    </a>




                    <a href="https://www.itsnicethat.com/articles/bambi-kirschner-digital-051018" className="link-edit" target="_blank">
                    <div className="project">
                        <span>Bambi Kirschner’s 3D-visuals present a bizarre, hyperreal 21st Century digital girl's world</span>
                        <span className="client-column">It's Nice That</span>                        
                    </div>
                    </a>

                    <a href="https://www.wonderlandmagazine.com/2016/10/04/im-lovin-2/" className="link-edit" target="_blank">
                        <div className="project">
                            <span>I'm Lovin' It</span>
                            <span className="client-column">Wonderland</span>
                        </div>
                    </a>        

                    <a href="https://www.itsnicethat.com/articles/thurstan-redding-castle-village-photography-180918" className="link-edit" target="_blank">
                    <div className="project">
                        <span>Photographer Thurstan Redding’s project Castle Village portrays an optimistic and joyful view of old age</span>
                        <span className="client-column">It's Nice That</span>                        
                    </div>
                    </a>                                   
                   

                        
                    
                    <a href="https://www.huckmag.com/art-and-culture/photography-2/the-mysterious-modern-world-of-roma-witchcraft/" className="link-edit" target="_blank">
                        <div className="project">
                            <span>The mysterious modern world of Roma witchcraft</span>
                            <span className="client-column">Huck</span>
                        </div>
                    </a>

                    
                                                           
                </div>  
                </div> 
                                            
                <img
                    src={svgPath}
                    className="laura-font-digital"
                    alt="website logo" />                 
            </div>
        );
    }
}

export default Digital;