import React from "react";

export const Row = ({ children }) => {
  const STYLE = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div style={STYLE} className="content__wrapper">
      {children}
    </div>
  );
};
