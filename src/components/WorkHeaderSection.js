import React from "react";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, TweenMax, Sine, Power3, Power0, Linear} from "gsap/TweenMax";

class WorkHeaderSection extends React.Component {
  componentDidMount() {
    var workHeaderController = new ScrollMagic.Controller();
    TweenMax.to(".port-image", 1, {
      y: 30,
      yoyo: true,
      repeat: -1,
      ease: Sine.easeInOut
    });

    var workHeaderAnimation = new TimelineMax()
      .set(".reveal", {
        scaleX: 0,
        transformOrigin: "50% 50%"
      })
      .from(".wrapper", 1, {
        opacity: 0
      })
      .to(".reveal", 0.5, {
        scaleX: 1,
        transformOrigin: "0% 50%",
        ease: Power3.easeOut
      })
      .from(".wHeadMain", 0.01, {
        autoAlpha: 0,
        ease: Power3.easeOut
      })
      .to(".reveal", 0.3, {
        scaleX: 0,
        transformOrigin: "100% 50%",
        ease: Power3.easeOut
      })
      .from(".wheadText", 0.5, {
        y: 50,
        autoAlpha: 0,
        ease: Power0.ease
      })
      .from(".main-counter", 0.5, {
        y: "100%",
        ease: Power0.ease
      });

    new ScrollMagic.Scene({
      triggerElement: ".work-header",
      triggerHook: 0.5
    })
      .on("start", function(e) {
        workHeaderAnimation.time(0);
      })
      .setTween(workHeaderAnimation)
      .addTo(workHeaderController);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="work-header">
          <div className="bg-text wheadText">Work Experience</div>
          <div className="port-text">
            <div className="reveal" />
            <div className="wHeadMain">Work Experience</div>
          </div>
          <div className="counter">
            <div className="main-counter">01</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkHeaderSection;
