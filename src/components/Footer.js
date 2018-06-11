import React from "react";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, Linear } from "gsap/TweenMax";

class Footer extends React.Component {
  componentDidMount() {
    var footerController = new ScrollMagic.Controller();

    var footerAnimation = new TimelineMax().from(".footer-main", 0.5, {
      top: "0",
      opacity: "0"
    });
    new ScrollMagic.Scene({
      triggerElement: ".footer-main"
    })
      .setTween(footerAnimation)
      .addTo(footerController);
  }
  render() {
    return (
      <div>
        <footer>
          <div className="footer-main">
            <div className="row">
              <div className="col-md-4 footer-info">
                <div className="footer-logo" />
                <p>
                  Central Signal Village, Taguig City morenoanalie14@gmail.com
                  &nbsp; 09155318566
                </p>
              </div>
              <div className="col-md-2 social-links">
                <h4>Social</h4>
                <ul>
                  <li>
                    <a href="https://twitter.com/Haaalieee">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/analiemoreno">Facebook</a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/114085340836286657362">
                      Google+
                    </a>
                  </li>
                  <li>
                    <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1528705373&rver=7.0.6730.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D578134%26redirect_uri%3Dhttps%253A%252F%252Fweb.skype.com%26state%3Dc46fca18-4223-4131-e1ef-32386e989221%26site_name%3Dlw.skype.com&lc=1033&id=293290&mkt=en-PH&psi=skype&lw=1&cobrandid=2befc4b5-19e3-46e8-8347-77317a16a5a5&client_flight=hsu%2CReservedFlight33%2CReservedFlight67">
                      Skype
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-subscribe">
                <h4>Contact Me</h4>

                <p>
                  If you have any questions at all, please do not hesitate to
                  contact me. Don't be shy.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright">
                  <span>© Copyright Moreno 2018.</span>
                  <span>
                    Design by{" "}
                    <a href="https://www.facebook.com/analiemoreno">Analie</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
