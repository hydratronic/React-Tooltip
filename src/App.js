import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 'top',
      hovering: false,
    };
  }

  // Handle click function to update the tooltip position
  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  // Handle mouse enter function to set hovering state to true
  handleMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };

  // Handle mouse leave function to set hovering state to false
  handleMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  };

  render() {
    return (
      <div className="App">
  {/* Position buttons */}
  <div className="btn-position">
    <div className="grp-name">Choose a position:</div>
    <button
      className={this.state.position === 'top' ? 'btn active' : 'btn'}
      onClick={(e) => {
        this.handleClick('top');
      }}
    >
      Top Position
    </button>
    <button
      className={this.state.position === 'left' ? 'btn active' : 'btn'}
      onClick={(e) => {
        this.handleClick('left');
      }}
    >
      Left Position
    </button>
    <button
      className={this.state.position === 'right' ? 'btn active' : 'btn'}
      onClick={(e) => {
        this.handleClick('right');
      }}
    >
      Right Position
    </button>
    <button
      className={this.state.position === 'bottom' ? 'btn active' : 'btn'}
      onClick={(e) => {
        this.handleClick('bottom');
      }}
    >
      Bottom Position
    </button>
  </div>



        {/* Hover button */}
        <div id="button-container">
          <button
            className="btn hover-btn"
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          >
            Hover here !!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position} text="This is a tooltip" />}
        </div>

        {/* Copyright */}
        <div>
          <h5 className="copyright">
            Copyright 2022-2023 Faruk Ahmed. All Rights Reserved!
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
