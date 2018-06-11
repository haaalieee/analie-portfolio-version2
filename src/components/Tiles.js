import React from "react";
import { data } from "../data";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, Power0 } from "gsap/TweenMax";

class Tiles extends React.Component {
  constructor() {
    super();
    this.tl = new TimelineMax({ paused: false });
  }

  state = {
    tilesState: []
  };



  componentDidMount() {
    this.setState({
      tilesState: [...new Array(this.props.data.length)].map((d, i) => false)
    });
    var tileController = new ScrollMagic.Controller();
    this.props.data.forEach((data, i) => {
      this.tl.from(
        this[`tile${data.id}`],
        1,
        { opacity: 0, ease: Power0.ease },
        0.1 * i
      );
    });

    new ScrollMagic.Scene({
      triggerElement: ".tiles",
      triggerHook: 0.5
    })
      .on("start", e => {
        this.tl.time(0);
      })
      .setTween(this.tl)
      .addTo(tileController);
  }

  tileStyle = state => {
    return state
      ? {
          width: "62vw",
          height: "62vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "0",
          marginTop: "-31vw",
          marginLeft: "-31vw",
          boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
          transform: "none"
        }
      : {
          width: "18vw",
          height: "18vw"
        };
  };

  clickHandler = index => {
    const tilesState = [...this.state.tilesState];
    tilesState.splice(index, 1, !tilesState[index]);
    this.setState({ tilesState });
  };

  render() {
    return (
      <div className="tiles">
        {this.props.data.map((data, index) => {
          return (
            <div
              ref={elRef => (this[`tile${data.id}`] = elRef)}
              key={data.id}
              className="tile"
            >
              <img
                onClick={e => this.clickHandler(index)}
                src={data.image}
                style={this.tileStyle(this.state.tilesState[index])}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tiles;
