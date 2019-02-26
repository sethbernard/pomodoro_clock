import React, { Component } from "react";

class SessionLength extends Component {
  render() {
    return (
      <div className="session-container">
        <h2 id="session-label">Session Length</h2>
        <div className="buttons">
          <button id="session-decrement" onClick={this.props.sessionDecrement}>
            -
          </button>
          <h2 id="session-length">{this.props.sessionLength}</h2>
          <button id="session-increment" onClick={this.props.sessionIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default SessionLength;
