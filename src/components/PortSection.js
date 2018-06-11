import React from "react";
import Tiles from "./Tiles";
import Pagination from "./Pagination";
import { data } from "../data";

class PortSection extends React.Component {
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
