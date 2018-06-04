import React from "react";

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row w100 wfold">
        <div className="col-md-6 pads">
          <div>
            <h1 className="fs tweenwtext">{this.props.company}</h1>
          </div>
          <div id="work-line" className="tweenwscreen" />
          <div>
            <h4 className="ss tweenwtext">{this.props.job}</h4>
            <h6 className="ss tweenwtext">{this.props.date}</h6>
            <br />
            <h6 className="su tweenwtext">{this.props.role}</h6>
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
    );
  }
}

export default WorkSection;
