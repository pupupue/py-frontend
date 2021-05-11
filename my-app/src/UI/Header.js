import React from "react";
import "./Header.css";

export const Header = ({ children }) => {
  const STYLE = {
    height: "60px",
    padding: "2rem",
    borderTop: "1px solid #5eac1e",
    borderBottom: "1px solid #5eac1e",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  return (
    <div style={STYLE} className="header__main">
      {children}
    </div>
  );
};
