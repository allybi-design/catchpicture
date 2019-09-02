import React, { Component } from "react";

export default class Box extends Component {
  getStyle = () => {
	return {
		backgroundColor: 'transparent',
      	border: 'none'
	}
  };

  render() {
    return (
      <div className="box" className="clearBox" onClick={this.props.clicked}>
        {this.props.id + 1}
      </div>
    );
  }
}
