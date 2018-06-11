import React from 'react';
import ScrollMagic from "./ScrollMagic";
import {TimelineMax, TweenMax, Linear} from 'gsap/TweenMax';


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
                    <img src="/images/AP-SEC-1-TEXT-2.png" className="responsive headOne glitch" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-1-TEXT-3.png" className="responsive headOne" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-1-TEXT-4.png" className="responsive headOne" alt="alie"/>
                </div>
                 <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-1-TEXT.png" className="responsive headOne" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-TV-1.png" className="responsive head-image front" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-TV-2.png" className="responsive head-image left " alt="alie2"/>
                </div>
            </div>
        )
    }
}

export default Header;