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
    const newBoxes = this.state.boxes.map((box, index) => {
      if (index === i) {
        box = true
      }
      return box
    })
   
    this.setState({boxes: newBoxes})
  };

  shuffleBoxes = ()=> {
      let square = Math.ceil(Math.random()*9)
      console.log(square)
  }

  render() {
    let boxes = this.state.boxes.map((box, i) => (
      <div
        key={i}
        className="box"
        onClick={()=>this.toggleShow(i)}
        style={this.getStyle(box)}
      />
    ));

    return (
     <div className="container boxesLayer">{boxes}</div>
    )
  }
}
