import React, { useState } from "react";
import "./IstabasAttels.css";

export const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export const IstabasAttels = ({
  cellData,
  onHover = (cellData) => console.log(cellData), //console.log=default state
  source1,
  source2,
  alt,
  styleProps,
  clicked, //change to onClick un  onClicked
}) => {
  const [hovered, setHovered] = useState(false);

  const STYLE = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  return (
    <>
      <img
        style={styleProps}
        onMouseOver={() => {
          setHovered(true);
          onHover(cellData);
        }}
        onMouseOut={() => setHovered(false)}
        onClick={clicked}
        src={hovered ? source2 : source1}
        alt={alt}
      />
    </>
  );
};
