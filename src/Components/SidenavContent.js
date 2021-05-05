import React from "react";
import { Sidenav } from "../UI/Sidenav";
import { SidenavButton } from "../Components/SidenavButton";
import { useHistory } from "react-router-dom";
import { CardBasic_user } from "../Components/CardBasic_user";

export const SidenavContent = () => {
  const history = useHistory();

  return (
    <Sidenav>
      <SidenavButton text="Dashboard" onClick={() => history.push("/")} />
      <SidenavButton text="Floor 1" onClick={() => history.push("/floor/1")} />
      <SidenavButton text="Floor 2" onClick={() => history.push("/floor/2")} />
      <SidenavButton text="Floor 3" onClick={() => history.push("/floor/3")} />
      <SidenavButton text="Floor 4" onClick={() => history.push("/floor/4")} />
      <SidenavButton text="Floor 5" onClick={() => history.push("/floor/5")} />
      <SidenavButton text="Attic" onClick={() => history.push("/floor/6")} />
      <SidenavButton
        text="Maintenance "
        onClick={() => history.push("/Maintenance")}
      />
      <CardBasic_user> Username</CardBasic_user>
    </Sidenav>
  );
};
