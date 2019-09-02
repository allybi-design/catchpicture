import React, { Component } from "react";
import Imagelayer from "./components/ImageLayer";
import Box from "./components/box";

export default class App extends Component {
  state = {
    boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  squareClicked(e) {
    console.log(e);
    console.log(`square clicked`);
  }

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
