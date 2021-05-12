import React, { useState } from "react";
import "./SidenavButton.css";
import { RiAlarmWarningLine, RiAlarmWarningFill } from "react-icons/ri";

export const SidenavButton = ({ onClick, text, alarm }) => {
  const [isAlarm, setIsAlarm] = useState(false);

  return (
    <div onClick={onClick} className="sidenav__button">
      <div className="sidenav__button--text">
        {text}
        {isAlarm && <RiAlarmWarningFill />}
      </div>

      <div className="sidenav__button--rectangle"></div>
    </div>
  );
};
