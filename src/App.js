import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends Component {
  state = {
    breakTime: 5,
    sessionLength: 25,
    timeLeft: 25,
    timerIsActive: false
  };

  handleBreakDecrement = () => {
    if (this.state.breakTime >= 2) {
      this.setState(prevState => ({
        breakTime: prevState.breakTime - 1
      }));
    }
  };

  handleBreakIncrement = () => {
    if (this.state.breakTime <= 98) {
      this.setState(prevState => ({
        breakTime: prevState.breakTime + 1
      }));
    }
  };

  handleSession = () => {};

  handleTimer = () => {};

  handleReset = () => {
    this.setState({
      breakTime: 5,
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
            breakTime={this.state.breakTime}
            breakDecrement={this.handleBreakDecrement}
            breakIncrement={this.handleBreakIncrement}
          />
          <SessionLength sessionLength={this.state.sessionLength} />
        </div>
        <Timer timeLeft={this.state.timeLeft} reset={this.handleReset} />
      </div>
    );
  }
}
export default App;
