import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <div>
        <div id="timer">
          <div id="timer-label">
            <h2>Session</h2>
          </div>
          <div id="time-left">
            <h1>25:00</h1>
          </div>
        </div>
        <div className="start-stop-reset">
          <button id="start-stop">Start</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
