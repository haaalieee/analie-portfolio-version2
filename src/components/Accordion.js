import React from "react";

class Accordion extends React.Component {
  state= {
    open: false,
    className: "content",
    linkClassName: "accordion a::after"
  }
  handleClick=(e)=>{
    e.preventDefault();
    if(this.state.open === false) {
      this.setState({
        open: true,
        className: "content",
        linkClassName: "accordion a::after"
      });
    }else{
      this.setState({
        open: false,
        className: "accordion-active",
        linkClassName: "active"
      });
    }
  }
  
  render() {
    return (
      <div className="accordion-item">
        <a onClick={this.handleClick} className={this.state.linkClassName}>
          {this.props.title}
        </a>
        <div className={this.state.className}>
          <p>
            {this.props.info}
          </p>
        </div>
      </div>
    );
  }
}

export default Accordion;
