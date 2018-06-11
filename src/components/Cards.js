import React from "react";
import { cards } from "../cards";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, Power0 } from "gsap/TweenMax";

class Cards extends React.Component {
  constructor() {
    super();
    this.tl = new TimelineMax({ paused: false });
  }

  componentDidMount() {
    var webController = new ScrollMagic.Controller();
    cards.forEach((cards, i) => {
      this.tl.from(
        this[`webCard${cards.id}`],
        1,
        { opacity: 0, ease: Power0.ease },
        0.1 * i
      );
    });

    new ScrollMagic.Scene({
      triggerElement: ".webCards",
      triggerHook: 0.5
    })
      .on("start", e => {
        this.tl.time(0);
      })
      .setTween(this.tl)
      .addTo(webController);
  }

  render() {
    return (
      <div className="webCards" >
        <div className="row">
          {cards.map((cards, index) => {
            return (
              <div className="col-md-4 webCard" key={cards.id}  ref={elRef => (this[`webCard${cards.id}`] = elRef)}>
                <div className="card">
                    <img className="card-img-top" src={cards.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{cards.title}</h5>
                        <p className="card-text">
                        {cards.role}
                        </p>
                        <p className="card-text">
                        {cards.description}
                        </p>
                        <a href={cards.url} className="btn">
                           Visit Me
                        </a>
                    </div>
                </div>
            </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
