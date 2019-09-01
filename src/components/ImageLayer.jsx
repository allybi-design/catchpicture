import React from "react";

function ImageLayer(props) {
  return (
    <div className="container imageLayer">
      <img className="image" src={props.image} alt="cartoon" />
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
  )
}

export default ImageLayer;
