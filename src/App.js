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
    minutes: 25,
    seconds: "00",
    timerIsRunning: false,
    isSession: true,
    sound: "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
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
    clearInterval(this.interval);

    this.setState({
      breakLength: 5,
      sessionLength: 25,
      minutes: 25,
      seconds: "00",
      timerIsRunning: false,
      isSession: true,
      sound: "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
    });
  };

  onStart = () => {
    if (this.state.seconds == 0) {
      this.setState({ minutes: this.state.minutes - 1, seconds: 60 });
    }

    if (this.state.seconds <= 60) {
      this.setState({ seconds: this.state.seconds - 1 });
    }

    if (this.state.seconds < 10 || this.state.seconds == 0) {
      this.setState({ seconds: "0" + this.state.seconds });
    }

    if (this.state.minutes < 10 && this.state.seconds == 59) {
      this.setState({ minutes: "0" + this.state.minutes });
    }

    if (
      this.state.minutes == 0 &&
      this.state.seconds == 0 &&
      this.state.isSession
    ) {
      this.audio.play();
      setTimeout(this.handleBreak, 1000);
    }
    if (
      this.state.minutes == 0 &&
      this.state.seconds == 0 &&
      !this.state.isSession
    ) {
      this.audio.play();
      this.handleReset();
      this.countDown();
    }
  };

  countDown = () => {
    this.setState({ timerIsRunning: true });
    this.interval = setInterval(this.onStart, 1000);
  };

  pauseTimer = () => {
    this.setState({ timerIsRunning: false });
    clearInterval(this.interval);
  };

  handleBreak = () => {
    this.setState({
      minutes: this.state.breakLength,
      seconds: "00",
      isSession: false
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
        <Timer
          timeLeft={`${this.state.minutes} : ${this.state.seconds}`}
          isRunning={this.state.timerIsRunning}
          reset={this.handleReset}
          start={this.countDown}
          pause={this.pauseTimer}
          session={this.state.isSession}
          sound={this.state.sound}
        />
        <audio
          id="beep"
          ref={audio => (this.audio = audio)}
          src={this.state.sound}
        />
      </div>
    );
  }
}
export default App;
