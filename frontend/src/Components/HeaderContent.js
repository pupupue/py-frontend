import React, { useEffect, useState } from "react";
import { Header } from "../UI/Header";
import { Time } from "../Components/Time";
import { HeaderButton } from "../Components/HeaderButton";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
export const HeaderContent = () => {
  const history = useHistory();
  return (
    <Header>
      <div>Icon</div>
      <div style={{width:1500, alignItems:"center", marginLeft: "auto",}}>
        <Time></Time>
      </div>

      <HeaderButton text="LOGOUT" onClick={() => history.push("/login")} />
    </Header>
  );
};
