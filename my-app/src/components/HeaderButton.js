import React from "react";
import "./HeaderButton.css";

export const HeaderButton = ({ onClick, text }) => {
  return (
    <div onClick={onClick} className="header__button">
      <div className="header__button--text">{text}</div>
    </div>
  );
};
