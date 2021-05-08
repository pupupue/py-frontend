import React, { useEffect, useState } from "react";
import { Header } from "../UI/Header";
import { Time } from "../components/Time";
import { HeaderButton } from "../components/HeaderButton";
import { useHistory } from "react-router-dom";

export const HeaderContent = (props) => {
  const history = useHistory();
  return (
    <Header>
      <div>Icon</div>
      <div style={{width:1500, alignItems:"center", marginLeft: "auto",}}>
        <Time></Time>
      </div>

      <HeaderButton text="LOGOUT" onClick={props.logoutBtn} />
    </Header>
  );
};
