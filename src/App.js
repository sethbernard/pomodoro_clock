import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Title />
        <div className="length-container">
          <BreakLength />
          <SessionLength />
        </div>
        <Timer />
      </div>
    );
  }
}
export default App;
