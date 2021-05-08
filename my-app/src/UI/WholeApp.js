import React from "react";

export const WholeApp = ({ children }) => {
  const STYLE = {
    height: "100vh",
    width: "100%",
    fontSize: "1rem", //16px
    color: "#f8f8fc",
    backgroundColor: "#2f4753",
  };
  return <div style={STYLE}>{children}</div>;
};
