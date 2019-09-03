import React, { Component } from "react";

export default class boxLayer extends Component {
  state = {
    boxes: [false, false, false, false, false, false, false, false, false],
    score: 18
  };

  getStyle = value => {
    return {
      backgroundColor: value ? "transparent" : "rgba(255, 0, 0, 1)",
      border: value ? "none" : "1px solid #000"
    };
  };

  toggleShow = i => {
    if (!this.state.boxes[i]) {
      const newBoxes = this.state.boxes.map((box, index) => {
        if (index === i) {
          box = true;
        }
        return box;
      });
      this.setState({ boxes: newBoxes });
      this.setState({ score: this.state.score - 2 });
    }
  };

  render() {
    let boxes = this.state.boxes.map((box, i) => (
      <div
        key={i}
        className="box"
        onClick={() => this.toggleShow(i)}
        style={this.getStyle(box)}
      />
    ));

    return (
      <div className="container boxesLayer">
        {boxes}
        {/* <ScoreComp score={this.state.score}/> */}
        <div className="scoreBox">
          <h1>Catch-Phrase</h1>
          <h2>Guess the character ?</h2>
          <p>
            You have 18 points for the max correct guess & -2 for each other
            guess you take.
          </p>
          <button className="btn">Correct</button>
          <button className="btn">Wrong</button>

          <h1>Score: {this.state.score}</h1>
        </div>
      </div>
    );
  }
}
