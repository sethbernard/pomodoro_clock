import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <div>
        <div id="timer">
          <div id="timer-label">
            <h2>{this.props.session ? "Work Session" : "Break"}</h2>
          </div>
          <div id="time-left">
            <h1>{this.props.timeLeft}</h1>
          </div>
        </div>
        <div className="start-stop-reset">
          <button
            id="start_stop"
            onClick={this.props.isRunning ? this.props.pause : this.props.start}
          >
            Start
          </button>
          <button id="reset" onClick={this.props.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
