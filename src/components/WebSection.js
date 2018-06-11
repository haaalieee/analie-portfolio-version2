import React from "react";
import Cards from "./Cards";
import { cards } from "../cards";

class WebSection extends React.Component {
  render() {
    return (
      // tiles component with all the data
      <Cards cards = {this.props.cards} />
    );
  }
}

export default WebSection;
