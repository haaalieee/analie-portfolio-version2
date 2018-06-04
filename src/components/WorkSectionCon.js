import React from "react";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, TweenMax, Linear } from "gsap/TweenMax";

class WorkSectionCon extends React.Component {
  componentDidMount() {
    var workTimeline = new TimelineMax();
    var workTimeline2 = new TimelineMax();
    var controller = new ScrollMagic.Controller();
    var duration = 1;
    var tween1 = TweenMax.from(
      ".tweenwtext",
      duration,
      { clipPath: "inset(100% 0px 0%)", opacity: 0, ease: Linear.easeInOut },
      4
    );
    var tween2 = TweenMax.from(
      ".tweenwscreen",
      0.2,
      { opacity: 0, ease: Linear.easeInOut },
      -0.5
    );
    var tween3 = TweenMax.to(
      ".tweenwtext",
      duration,
      { clipPath: "inset(100% 0px 0%)", opacity: 0, ease: Linear.easeInOut },
      0.5
    );
    var tween4 = TweenMax.to(
      ".tweenwscreen",
      0.2,
      { opacity: 0, ease: Linear.easeInOut },
      10
    );


    workTimeline.add(tween1).add(tween2).add(tween3).add(tween4);
    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#trigger-work",
      duration: 3000,
      offset: 310
    })
      .setPin(".work-border")
      .addTo(controller);

    scene1.setTween(workTimeline);
  }

  render() {
    return (
      <div className="work-fold" id="trigger-work">
        <div className="work-border">
          <div className="row w100 wfold">
            <div className="col-md-6 pads">
              <div>
                <h1 className="fs tweenwtext">Schmuzter</h1>
              </div>
              <div id="work-line" className="tweenwscreen" />
              <div>
                <h4 className="ss tweenwtext">
                  Web Developer + Motion Content Designer
                </h4>
                <h6 className="ss tweenwtext">2017 - 2018</h6>
                <br />
                <h6 className="su tweenwtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean at lectus sagittis tortor feugiat venenatis. Mauris
                  vulputate, eros quis porttitor congue, magna dui blandit diam,
                  quis volutpat nulla mi at felis. Nunc at pharetra ante, ac
                  lacinia justo. Nunc facilisis dolor nec nisl aliquet, ac
                  molestie turpis hendrerit. Proin fringilla maximus felis id
                  tempus. Sed ornare quam at ligula pulvinar vestibulum.
                  Pellentesque ac molestie ipsum. Mauris vel dui sit amet erat
                  pharetra fringilla. Pellentesque eu tincidunt dui. Sed ac
                  fermentum ipsum.
                </h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tweenwscreen">
                <img
                  src="/images/AP-SEC-2-SCREEN.png"
                  className="responsive headOne"
                  alt="alie"
                />
              </div>
            </div>
          </div>
          <div className="row w100 wfold" id="wfold2">
            <div className="col-md-6 pads">
              <div>
                <h1 className="fs tweenwtext">Hello</h1>
              </div>
              <div id="work-line" className="tweenwscreen" />
              <div>
                <h4 className="ss tweenwtext">
                  Try
                </h4>
                <h6 className="ss tweenwtext">2017 - 2018</h6>
                <br />
                <h6 className="su tweenwtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean at lectus sagittis tortor feugiat venenatis. Mauris
                  vulputate, eros quis porttitor congue, magna dui blandit diam,
                  quis volutpat nulla mi at felis. Nunc at pharetra ante, ac
                  lacinia justo. Nunc facilisis dolor nec nisl aliquet, ac
                  molestie turpis hendrerit. Proin fringilla maximus felis id
                  tempus. Sed ornare quam at ligula pulvinar vestibulum.
                  Pellentesque ac molestie ipsum. Mauris vel dui sit amet erat
                  pharetra fringilla. Pellentesque eu tincidunt dui. Sed ac
                  fermentum ipsum.
                </h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tweenwscreen">
                <img
                  src="/images/AP-SEC-2-SCREEN.png"
                  className="responsive headOne"
                  alt="alie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkSectionCon;
