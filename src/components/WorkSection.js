import React from 'react';
import ScrollMagic from "./ScrollMagic";
import {TimelineMax, TweenMax, Linear} from 'gsap/TweenMax';

class WorkSection extends React.Component{0
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var workTimeline = new TimelineMax();
        var controller = new ScrollMagic.Controller();
        var duration = 1;
        var tween1 = TweenMax.from('.tweenwtext', duration, {clipPath:'inset(100% 0px 0%)', opacity: 0  , ease:Linear.easeInOut}, 4 );
        var tween2 = TweenMax.from('.tweenwscreen', 0.5, { opacity: 0, ease:Linear.easeInOut}, -0.5 );
        workTimeline.add(tween1).add(tween2);
        var scene1 = new ScrollMagic.Scene({
            triggerElement:'#trigger-work'
        })
        .addTo(controller);

        scene1.setTween(workTimeline);
    };

    render(){
        return(
            <div>
                <div className="work-fold" id="trigger-work">
                    <div className="work-border">
                       <div className="row w100 wfold" >
                            <div className="col-md-6 pads">
                                <div>
                                    <h1 className="fs tweenwtext">{this.props.company}</h1>
                                </div>
                                    <div id="work-line" className="tweenwscreen"></div>
                                    <div>
                                        <h4 className="ss tweenwtext">{this.props.job}</h4>
                                        <h6 className="ss tweenwtext">{this.props.date}</h6>
                                        <br></br>
                                        <h6 className="su tweenwtext">{this.props.role}</h6>
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tweenwscreen">
                                    <img src="/images/AP-SEC-2-SCREEN.png" className="responsive headOne" alt="alie"/>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkSection;