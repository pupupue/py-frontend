import React from "react";
import "./CardBasic_user.css";

export const CardBasic_user = ({ styleProps = {}, children }) => {
  const STYLE = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  return (
    <div
      // first default then overrides
      className="cardbasic_user"
    >
      <div style={{ ...STYLE, ...styleProps }}>
        <div className="fakeborder fakeborder-tr"></div>
        <div className="fakeborder fakeborder-tl"></div>
        <div className="fakeborder fakeborder-br"></div>
        <div className="fakeborder fakeborder-bl"></div>
        <div clasnName="background-pic"></div>
        {children}
      </div>
    </div>
  );
};
