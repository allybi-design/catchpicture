import React, { Component } from "react";
// import Imagelayer from "./components/ImageLayer.jsx";
// import Box from "./components/box";

export default class App extends Component {
  state = {
    boxes: [false,false,false,false,false,false,false,false,false,]
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

  toggleShow = (i) => {
    console.log(`index ${i}`);
    console.log(`square clicked`)
    console.log(this.state.boxes[i]);
    const newBoxes = this.state.boxes.map((box, index) => {
      if (index === i) {
        box = true
      }
      return box
    })
    console.log(newBoxes)
    this.setState({boxes: newBoxes})

  };

  render() {
    let boxes = this.state.boxes.map((box, i) => (
      <div
        key={i}
        className="box"
        onClick={()=>this.toggleShow(i)}
        // style={this.getStyle(box.value)}
        style={this.getStyle(box)}
      ></div>
    ));

    return (
      <div className="wrapper">
        {/* <Imagelayer image={this.randImage()} /> */}
        <div className="container imageLayer">
            <img className="image" src={this.randImage()} alt="cartoon" />
            <div className="playBox">
              <h1>Welcome to Catch-Phrase</h1>
              <h2>Can you Guess the character???</h2>
              <p>You have 18 points for the max correct guess & -2 for each other guess you take.</p>
              <button className="btn">Correct</button>
              <button className="btn">Wrong</button>
            </div>
            <div className="scoreBox">
              <h1>Score: 18</h1>
            </div>
          </div>

        <div className="container gridLayer">{boxes}</div>
      </div>
    );
  }
}
