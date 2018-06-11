import React from "react";
import ScrollMagic from "./ScrollMagic";
import {
  TimelineMax,
  TweenMax,
  Sine,
  Power3,
  Power0
} from "gsap/TweenMax";

class PortHeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.portHeader = React.createRef();
  }

  portHeaderFocus = () => {
    this.portHeader.current.childNodes.forEach(ch => {
      var portController = new ScrollMagic.Controller();
      TweenMax.to(".port-image", 1, {
        y: 30,
        yoyo: true,
        repeat: -1,
        ease: Sine.easeInOut
      });

      var portAnimation = new TimelineMax()
        .set(".reveal", {
          scaleX: 0,
          transformOrigin: "50% 50%"
        })
        .to(".reveal", 0.5, {
          scaleX: 1,
          transformOrigin: "0% 50%",
          ease: Power3.easeOut
        })
        .from(".main-text", 0.01, {
          autoAlpha: 0,
          ease: Power3.easeOut
        })
        .to(".reveal", 0.3, {
          scaleX: 0,
          transformOrigin: "100% 50%",
          ease: Power3.easeOut
        })
        .from(".bg-text", 0.5, {
          y: 50,
          autoAlpha: 0,
          ease: Power0.ease
        })
        .from(".port-counter", 0.5, {
          y: "100%",
          ease: Power0.ease
        });

      new ScrollMagic.Scene({
        triggerElement: ".port-header",
        triggerHook: 0.5
      })
        .on("start", function(e) {
          portAnimation.time(0);
        })
        .setTween(portAnimation)
        .addTo(portController);
    });
  };

  componentDidMount() {
      this.portHeaderFocus();
  }

  render() {
    return (
      <div className="wrapper portWrapper">
        <div ref={this.portHeader}>
          <div className="port-header">
            <div className="bg-text">{this.props.BgText}</div>
            <div className="port-text">
              <div className="reveal" />
              <div className="main-text">{this.props.FrontText}</div>
            </div>
            <div className="counter">
              <div className="main-counter port-counter">02</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortHeaderSection;
