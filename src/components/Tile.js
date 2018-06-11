import React from 'react';

class Tile extends React.Component {
  state = {
      open:false
  };
  // click handler
  // setting state of open true/false
  _clickHandler=(e)=>{
    e.preventDefault();
    if(this.state.open === false) {
      this.setState({
        open: true
      });
      // else set state to false
    } else {
      this.setState({
        open:false
      })
    }
  }
 
  render() {
    // Modify styles based on state values
    let tileStyle = {};
    
    if(this.state.open) {
         tileStyle = {
          width: '62vw',
          height: '62vw',
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '0',
          marginTop: '-31vw',
          marginLeft: '-31vw',
          boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
          transform: 'none'
        };
       } else {
			  tileStyle = {
				width: '18vw',
				height: '18vw'
			  };
       }

  
  return (
    <div className='tile'>
      <img
        onClick={this._clickHandler}
        src={this.props.data.image}
        style={tileStyle}
        />
    </div>
  )
  }
}

export default Tile;