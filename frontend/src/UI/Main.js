import React from "react";

export const Main = ({ children }) => {
  const STYLE = {
    height: "calc(100vh - 90px)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  return <div style={STYLE}>{children}</div>;
};
