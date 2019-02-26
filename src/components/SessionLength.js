import React, { Component } from "react";

export class SessionLength extends Component {
  render() {
    return (
      <div className="session-container">
        <h2 id="session-label">Session Length</h2>
        <div className="buttons">
          <button id="session-decrement">-</button>
          <h2 id="session-length">25</h2>
          <button id="session-increment">+</button>
        </div>
      </div>
    );
  }
}

export default SessionLength;