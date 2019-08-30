import React from "react";

function ImageLayer(props) {
  return (
    <div className="container imageLayer">
      <img src={props.image} alt="cartoon" />;
    </div>
  )
}

export default ImageLayer;
