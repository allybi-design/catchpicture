import React from "react";

function box(props) {
  return (
    <div className="box" onClick={props.clicked}>
      {props.id + 1}
    </div>
  );
}

export default box;
