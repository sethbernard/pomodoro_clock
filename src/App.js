import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="title">
          <h1>Pomodoro Clock</h1>
        </div>
        <div className="length-container">
          <div className="break-container">
            <h2 id="break-label">Break Length</h2>
            <div className="buttons">
              <button id="break-decrement">-</button>
              <h2 id="break-length">5</h2>
              <button id="break-increment">+</button>
            </div>
          </div>
          <div className="session-container">
            <h2 id="session-label">Session Length</h2>
            <div className="buttons">
              <button id="session-decrement">-</button>
              <h2 id="session-length">25</h2>
              <button id="session-increment">+</button>
            </div>
          </div>
        </div>
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
export default App;
