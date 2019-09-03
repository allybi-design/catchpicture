import React, { Component } from "react";

export default class ImageLayer extends Component {

  randImage = () => {
    let num = Math.ceil(Math.random() * 20);
    return `./images/image${num}.png`;
  };

  render() {
    return (
      <div className="container imageLayer">
        <img className="image" src={this.randImage()} alt="cartoon" />
      </div>
    );
  }
}
