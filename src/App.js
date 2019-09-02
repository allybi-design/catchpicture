import React, { Component } from "react";
import Imagelayer from "./components/ImageLayer.jsx";
import BoxsLayer from "./components/BoxsLayer.jsx"


export default class App extends Component {
  state = {
    score: 18
  };

  render() {
    return (
      <div className="wrapper">
        <Imagelayer score={this.state.score}/>
        <BoxsLayer />
      </div>
    );
  }
}
