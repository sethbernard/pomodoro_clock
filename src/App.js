import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      minutes: 25,
      seconds: 0,
      timerIsRunning: false,
      isSession: true
    };
  }

  handleBreakDecrement = () => {
    if (this.state.breakLength >= 2) {
      this.setState(prevState => ({
        breakLength: prevState.breakLength - 1
      }));
    }
  };

  handleBreakIncrement = () => {
    if (this.state.breakLength < 60) {
      this.setState(prevState => ({
        breakLength: prevState.breakLength + 1
      }));
    }
  };

  handleSessionDecrement = () => {
    if (this.state.sessionLength >= 2) {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength - 1,
        minutes: prevState.sessionLength - 1
      }));
    }
  };

  handleSessionIncrement = () => {
    if (this.state.sessionLength < 60) {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength + 1,
        minutes: prevState.sessionLength + 1
      }));
    }
  };

  handleReset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      minutes: 25,
      seconds: 0,
      timerIsRunning: false,
      isSession: true
    });
  };

  onStart = () => {
    this.setState({ timerIsRunning: true });

    if (this.state.seconds === 0) {
      this.setState({ minutes: this.state.minutes - 1, seconds: 60 });
    }

    if (this.state.seconds < 60) {
      this.setState({ seconds: this.state.seconds - 1 });
    }
    if (this.state.minutes === 0 && this.state.seconds === 0)
      clearInterval(this.interval);
  };

  countDown = () => {
    this.interval = setInterval(this.onStart, 1000);
  };

  render() {
    return (
      <div id="app">
        <Title />
        <div className="length-container">
          <BreakLength
            breakLength={this.state.breakLength}
            breakDecrement={this.handleBreakDecrement}
            breakIncrement={this.handleBreakIncrement}
          />
          <SessionLength
            sessionLength={this.state.sessionLength}
            sessionDecrement={this.handleSessionDecrement}
            sessionIncrement={this.handleSessionIncrement}
          />
        </div>
        <Timer
          timeLeft={`${this.state.minutes} : ${this.state.seconds}`}
          reset={this.handleReset}
          start={this.countDown}
        />
      </div>
    );
  }
}
export default App;
