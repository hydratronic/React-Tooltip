import React from 'react';
import './Tooltip.css';

class Tooltip extends React.Component {
  // Get the class name for the tooltip based on the position prop
  getClassname = () => {
    return this.props.position;
  };

  render() {
    return (
      <div className={`tooltip ${this.getClassname()}`}>
        {/* Display the tooltip message */}
        Thanks for hovering in the "{this.props.position}" position!
      </div>
    );
  }
}

export default Tooltip;
