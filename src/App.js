import React, { Component } from "react";
import Imagelayer from "./components/ImageLayer.jsx";
// import Box from "./components/box";

export default class App extends Component {
  state = {
    boxes: [
      { value: false },
      { value: false },
      { value: true },
      { value: false },
      { value: true },
      { value: false },
      { value: false },
      { value: false },
      { value: false }
    ]
  };

  randImage = () => {
    let num = Math.ceil(Math.random() * 20);
    return `./images/image${num}.png`;
  };

  getStyle = value => {
    return {
      backgroundColor: value ? "transparent" : "rgba(255, 0, 0, 1)",
      border: value ? "none" : "1px solid #000"
    };
  };

  toggleSquare = (i) => {
    console.log(i);
    console.log(`square clicked`);
    this.setState({boxes[i].value: true})
  };

  render() {
    let boxes = this.state.boxes.map((box, i) => (
      <div
        key={i}
        className="box"
        onClick={() => this.toggleSquare(i)}
        style={this.getStyle(box.value)}
      ></div>
    ));

    return (
      <div className="wrapper">
        <Imagelayer image={this.randImage()} />

        <div className="container gridLayer">{boxes}</div>
      </div>
    );
  }
}
