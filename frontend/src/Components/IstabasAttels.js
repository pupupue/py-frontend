import React, { useState } from "react";

export const IstabasAttels = ({ source1, source2, alt, styleProps }) => {
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
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        src={hovered ? source2 : source1}
        alt={alt}
      />
    </>
  );
};
