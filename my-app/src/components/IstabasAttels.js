import React, { useState } from "react";
import "./IstabasAttels.css";

export const IstabasAttels = ({
  cellData,
  onHover = (cellData) => console.log(cellData), //console.log=default state
  source1,
  source2,
  source3,
  alt,
  styleProps,
  clicked, //change to onClick un  onClicked
}) => {
  const [hovered, setHovered] = useState(false);
  const src =
    cellData && cellData.Status === "DOWN"
      ? source3
      : hovered
      ? source2
      : source1;
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
        src={src}
        alt={alt}
      />
    </>
  );
};
