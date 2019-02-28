import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timeLeft: 25,
    timerIsActive: false
  };

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
        sessionLength: prevState.sessionLength - 1
      }));
    }
  };

  handleSessionIncrement = () => {
    if (this.state.sessionLength < 60) {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength + 1
      }));
    }
  };

  handleReset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 25,
      timerIsActive: false
    });
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
        <Timer timeLeft={this.state.timeLeft} reset={this.handleReset} />
      </div>
    );
  }
}
export default App;
