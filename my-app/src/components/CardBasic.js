import React from "react";
import "./CardBasic.css";

export const CardBasic = ({ styleProps = {}, children }) => {
  const STYLE = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  return (
    <div
      // first default then overrides
      className="cardbasic"
    >
      <div style={{ ...STYLE, ...styleProps }}>
        <div className="fakeborder fakeborder-tr"></div>
        <div className="fakeborder fakeborder-tl"></div>
        <div className="fakeborder fakeborder-br"></div>
        <div className="fakeborder fakeborder-bl"></div>
        {children}
      </div>
    </div>
  );
};
