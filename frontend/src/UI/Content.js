import React from "react";
import "./Content.css";

export const Content = ({ children }) => {
  const STYLE = {
    height: "100%",
    padding: "2rem 3rem",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  };

  return (
    <div style={STYLE}>
      <div style={{ margin: "-2rem -3rem", height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  );
};
