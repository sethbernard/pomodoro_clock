import React, { Component } from "react";

class BreakLength extends Component {
  render() {
    return (
      <div className="length-container">
        <div className="break-container">
          <h2 id="break-label">Break Length</h2>
          <div className="buttons">
            <button id="break-decrement" onClick={this.props.breakDecrement}>
              -
            </button>
            <h2 id="break-length">{this.props.breakLength}</h2>
            <button id="break-increment" onClick={this.props.breakIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BreakLength;
