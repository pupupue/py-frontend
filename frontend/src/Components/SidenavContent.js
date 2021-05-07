import React from "react";
import { Sidenav } from "../UI/Sidenav";
import { SidenavButton } from "../Components/SidenavButton";
import { useHistory } from "react-router-dom";
import { CardBasic_user } from "../Components/CardBasic_user";
import noPhoto from "../Restes_bildes/no_image.png"

export const SidenavContent = () => {
  const history = useHistory();

  return (
    <Sidenav>
      <SidenavButton text="Dashboard" onClick={() => history.push("/")} />
      <SidenavButton text="Floor 1" onClick={() => history.push("/floor1")} />
      <SidenavButton text="Floor 2" onClick={() => history.push("/floor2")} />
      <SidenavButton text="Floor 3" onClick={() => history.push("/floor3")} />
      <SidenavButton text="Floor 4" onClick={() => history.push("/floor4")} />
      <SidenavButton text="Floor 5" onClick={() => history.push("/floor5")} />
      <SidenavButton text="Attic" onClick={() => history.push("/floor6")} />
      <SidenavButton
        text="Maintenance "
        onClick={() => history.push("/Maintenance")}
      />
      <CardBasic_user> <h1>Username</h1><h2>Security level</h2><h2>ID</h2> <img style={{Transform:"scale(0.6)"}} src={noPhoto} /></CardBasic_user>
    </Sidenav>
  );
};
