import React, { Component } from "react";
import Imagelayer from "./components/ImageLayer";
import Box from "./components/box";

export default class App extends Component {
  state = {
    boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  render() {
    let boxes = this.state.boxes.map((box, i) => <Box key={i} id={i} />)


    return (
      <div className="wrapper">
        <Imagelayer image={"./images/image1.jpg"} />

        <div className="container gridLayer">
          {boxes}
        </div>
      </div>
    );
  }
}
