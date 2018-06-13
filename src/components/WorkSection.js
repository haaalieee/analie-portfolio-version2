import React from "react";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, Linear } from "gsap/TweenMax";

class WorkSection extends React.Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var wipeAnimation = new TimelineMax()
      .from("#slideContainer", 0.5, { opacity: 0, ease: Linear.easeInOut })
      .to("#slideContainer", 2, { x: "-33%", ease: Linear.easeInOut })
      .to("#slideContainer", 2, { x: "-66%", ease: Linear.easeInOut });

    new ScrollMagic.Scene({
      triggerElement: ".work-border",
      triggerHook: "onLeave",
      duration: "500%",
      offset: -80
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
              <section className="panel">
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
                      Schmuzter is a digital media one-stop shop that offers
                      end-to-end solutions on online and social media marketing.
                      After founding Groupon in the Philippines, the Schmuzers
                      then moved on to create a young and fun company in 2011
                      with a mission to revolutionize the way people connect
                      through social media.
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
              <section className="panel">
                <div className="col-md-6">
                  <div>
                    <h1 className="fs tweenwtext">3D Me Philippines Inc.</h1>
                  </div>
                  <div id="work-line" className="tweenwscreen" />
                  <div>
                    <h4 className="ss tweenwtext">Web Developer Intern</h4>
                    <h6 className="ss tweenwtext">2016</h6>
                    <br />
                    <h6 className="su tweenwtext">
                      3DMe brand and product concept is a result of
                      collaborative efforts between partners who have over
                      twenty years experience in lenticular technology, photo
                      equipment manufacturing, industrial engineering, including
                      in depth management, business development, and global
                      marketing expertise.
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tweenwscreen">
                    <img
                      src="/images/AP-SEC-2-2-SCREEN.png"
                      className="responsive headOne"
                      alt="alie"
                    />
                  </div>
                </div>
              </section>
              <section className="panel">
                <div className="col-md-6">
                  <div>
                    <h1 className="fs tweenwtext">Remote Staff Inc</h1>
                  </div>
                  <div id="work-line" className="tweenwscreen" />
                  <div>
                    <h4 className="ss tweenwtext">Web Developer Intern</h4>
                    <h6 className="ss tweenwtext">2015</h6>
                    <br />
                    <h6 className="su tweenwtext">
                      Remote Staff is a technology company that offers
                      recruitment services for home-based professionals. Remote
                      Staff hire people located nationally across the entire
                      Philippines, from provincial towns to cities, so long as
                      you meet our minimum Internet speed requirements, speak
                      very good English and are committed to building a
                      long-term career working with our clients.
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tweenwscreen">
                    <img
                      src="/images/AP-SEC-2-3-SCREEN.png"
                      className="responsive headOne"
                      alt="alie"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkSection;
