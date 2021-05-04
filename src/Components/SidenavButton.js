import React from "react";
import "./SidenavButton.css";

export const SidenavButton = ({ onClick, text }) => {
  return (
    <div onClick={onClick} className="sidenav__button">
      <div className="sidenav__button--text">{text}</div>
      <div className="sidenav__button--rectangle"></div>
    </div>
  );
};
