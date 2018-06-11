import React from "react";
import ScrollMagic from "./ScrollMagic";
import {
  TimelineMax,
  TweenMax,
  Sine,
  Power3,
  Power0
} from "gsap/TweenMax";

class WebHeaderSection extends React.Component {
  componentDidMount() {
    var webHeaderController = new ScrollMagic.Controller();
    TweenMax.to(".port-image", 1, {
      y: 30,
      yoyo: true,
      repeat: -1,
      ease: Sine.easeInOut
    });

    var webHeaderAnimation = new TimelineMax()
      .set(".reveal", {
        scaleX: 0,
        transformOrigin: "50% 50%"
      })
      .to(".reveal", 0.5, {
        scaleX: 1,
        transformOrigin: "0% 50%",
        ease: Power3.easeOut
      })
      .from(".webHeadMain", 0.01, {
        autoAlpha: 0,
        ease: Power3.easeOut
      })
      .to(".reveal", 0.3, {
        scaleX: 0,
        transformOrigin: "100% 50%",
        ease: Power3.easeOut
      })
      .from(".webheadText", 0.5, {
        y: 50,
        autoAlpha: 0,
        ease: Power0.ease
      })
      .from(".main-counter", 0.5, {
        y: "100%",
        ease: Power0.ease
      });

    new ScrollMagic.Scene({
      triggerElement: ".web-header",
      triggerHook: 0.5
    })
      .on("start", function(e) {
        webHeaderAnimation.time(0);
      })
      .setTween(webHeaderAnimation)
      .addTo(webHeaderController);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="web-header">
          <div className="webheadText">Web Development</div>
          <div className="port-text">
            <div className="reveal" />
            <div className="webHeadMain">Web Development</div>
          </div>
          <div className="counter">
            <div className="main-counter">03</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebHeaderSection;
