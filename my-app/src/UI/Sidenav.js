import React from "react";

export const Sidenav = ({ children }) => {
  const STYLE = {
    height: "100%",
    padding: "2rem 2rem 2rem 0",
    flex: "0 0 20rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  return <div style={STYLE}>{children}</div>;
};
