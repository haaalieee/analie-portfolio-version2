import React from 'react';
import ScrollMagic from "./ScrollMagic";
import {TimelineMax, TweenMax, Linear} from 'gsap/TweenMax';
import sec1 from "../assets/images/AP-SEC-1-TEXT-2.png";
import sec2 from "../assets/images/AP-SEC-1-TEXT-3.png";
import sec3 from "../assets/images/AP-SEC-1-TEXT-4.png";
import sec4 from "../assets/images/AP-SEC-1-TEXT.png";
import sec5 from "../assets/images/AP-SEC-TV-1.png";
import sec6 from "../assets/images/AP-SEC-TV-2.png";



class Header extends React.Component {
    componentDidMount(){
        var headTimeline = new TimelineMax();
        var controller = new ScrollMagic.Controller();
        var duration = 0.5;
        var tween1 = TweenMax.to('.header-fold', duration, { top: "-418px", opacity: 0  , ease:Linear.easeInOut} );
        headTimeline.add(tween1);
        var scene2 = new ScrollMagic.Scene({
            triggerElement:'.wrapper'
        })
        .addTo(controller);
        scene2.setTween(headTimeline);
    };

    render(){
        return (
            <div className="header-fold">         
                <div className="hero-section" id="hero-section-a">
                    <img src={sec1} className="responsive headOne glitch" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src={sec2} className="responsive headOne" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src={sec3} className="responsive headOne" alt="alie"/>
                </div>
                 <div className="hero-section" id="hero-section-a">
                    <img src={sec4} className="responsive headOne" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src={sec5} className="responsive head-image front" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src={sec6} className="responsive head-image left " alt="alie2"/>
                </div>
            </div>
        )
    }
}

export default Header;