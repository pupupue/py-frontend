import React from "react";
import { Sidenav } from "../UI/Sidenav";
import { SidenavButton } from "../components/SidenavButton";
import { useHistory } from "react-router-dom";
import { CardBasic_user } from "../components/CardBasic_user";
import noPhoto from "../Restes_bildes/no_image.png"

export const SidenavContent = () => {
  const history = useHistory();

  return (
    <Sidenav>
      <SidenavButton text="Dashboard" onClick={() => history.push("/App")} />
      <SidenavButton text="Floor 1" onClick={() => history.push("/App/floor1")} />
      <SidenavButton text="Floor 2" onClick={() => history.push("/App/floor2")} />
      <SidenavButton text="Floor 3" onClick={() => history.push("/App/floor3")} />
      <SidenavButton text="Floor 4" onClick={() => history.push("/App/floor4")} />
      <SidenavButton text="Floor 5" onClick={() => history.push("/App/floor5")} />
      <SidenavButton text="Attic" onClick={() => history.push("/App/floor6")} />
      <SidenavButton
        text="Maintenance "
        onClick={() => history.push("/Maintenance")}
      />
      <CardBasic_user> <h2>Username</h2><h2>Security level</h2><img style={{Transform:"scale(0.6)"}} src={noPhoto} /></CardBasic_user>
    </Sidenav>
  );
};
