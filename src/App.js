import React, { Component } from "react";
import Imagelayer from "./components/ImageLayer.jsx";
import Box from "./components/box";

export default class App extends Component {
  state = {
    boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  squareClicked(e) {
    console.log(e);
    console.log(`square clicked`);
  }
<<<<<<< HEAD
=======

  render() {
    let boxes = this.state.boxes.map((box, i) => <Box key={i} clicked={this.squareClicked} id={i} />)
>>>>>>> 02dc37d25d718bc77b5df9575f9ee1441fa93d80

  render() {
    let boxes = this.state.boxes.map((box, i) => (
      <Box key={i} clicked={this.squareClicked} id={i} />
    ));

    return (
      <div className="wrapper">
        <Imagelayer image={"./images/image1.png"} />

        <div className="container gridLayer">{boxes}</div>
      </div>
    );
  }
}
