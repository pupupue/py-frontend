import React from "react";
import "./istabas_attels.css";

export const Apaksa = ({ styleProps = {}, children }) => {
  const STYLE = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  return (
    <div
      // first default then overrides
      className="apaksa"
    >
      <div style={{ ...STYLE, ...styleProps }}>
        {children}
      </div>
    </div>
  );
};
