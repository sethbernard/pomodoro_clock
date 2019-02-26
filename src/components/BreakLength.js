import React, { Component } from "react";

class BreakLength extends Component {
  render() {
    return (
      <div className="length-container">
        <div className="break-container">
          <h2 id="break-label">Break Length</h2>
          <div className="buttons">
            <button id="break-decrement">-</button>
            <h2 id="break-length">{this.props.breakTime}</h2>
            <button id="break-increment">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BreakLength;
