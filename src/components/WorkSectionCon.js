import React from "react";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, TweenMax, Linear } from "gsap/TweenMax";

class WorkSectionCon extends React.Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
      .from("#slideContainer", 0.5, { opacity: 0 , ease: Linear.easeInOut})
      .to("#slideContainer", 1, { x: "-25%" })
      .to("#slideContainer", 1, { x: "-50%" })
      .to("#slideContainer", 1, { x: "-75%" });

    new ScrollMagic.Scene({
      triggerElement: ".work-border",
      triggerHook: "onLeave",
      duration: "500%",
      offset: -50
    })
      .setPin(".work-border")
      .setTween(wipeAnimation)
      .addTo(controller);
  }

  render() {
    return (
      <div className="work-fold" id="trigger-work">
        <div className="work-border">
          <div id="pinContainer">
            <div id="slideContainer">
              <section class="panel blue">
                  <div className="col-md-6">
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
                        Aenean at lectus sagittis tortor feugiat venenatis.
                        Mauris vulputate, eros quis porttitor congue, magna dui
                        blandit diam, quis volutpat nulla mi at felis. Nunc at
                        pharetra ante, ac lacinia justo. Nunc facilisis dolor
                        nec nisl aliquet, ac molestie turpis hendrerit. Proin
                        fringilla maximus felis id tempus. Sed ornare quam at
                        ligula pulvinar vestibulum. Pellentesque ac molestie
                        ipsum. Mauris vel dui sit amet erat pharetra fringilla.
                        Pellentesque eu tincidunt dui. Sed ac fermentum ipsum.
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
              </section>
              <section class="panel turqoise">
                <b>TWO</b>
              </section>
              <section class="panel green">
                <b>THREE</b>
              </section>
              <section class="panel bordeaux">
                <b>FOUR</b>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkSectionCon;
