import React from "react";
import Tiles from "./Tiles";
import Pagination from "./Pagination";
import { data } from "../data";
import ScrollMagic from "./ScrollMagic";
import { TimelineMax, Linear, Back} from "gsap/TweenMax";

class PortSection extends React.Component {
   componentDidMount() {
    var pageController = new ScrollMagic.Controller();

    var pageAnimation = new TimelineMax()
      .from(".pagination", 0.5, { opacity: 0, ease: Linear.easeInOut })

    new ScrollMagic.Scene({
      triggerElement: ".pagination",
    })
      .setTween(pageAnimation)
      .addTo(pageController);
  }

  render() {
    return (
      // tiles component with all the data
      <Pagination data={data}>
        <Tiles />
      </Pagination>
    );
  }
}

export default PortSection;
