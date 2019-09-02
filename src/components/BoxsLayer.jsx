import React, { Component } from 'react'
// import Box from "./Box.jsx";

export default class boxLayer extends Component {
  state = {
    boxes: [false,false,false,false,false,false,false,false,false]   
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
    this.setState({score: this.state.score -2})
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
      />
    ));

    return (
     <div className="container boxesLayer">{boxes}</div>
    )
  }
}
