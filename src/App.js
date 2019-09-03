import React, { Component } from "react";
import ImageLayer from "./components/ImageLayer.jsx";
import BoxsLayer from "./components/BoxsLayer.jsx";

export default class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <ImageLayer />
        <BoxsLayer  />  
      </div>
    );
  }
}
