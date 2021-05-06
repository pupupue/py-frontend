import React from "react";
import { Route, Switch } from "react-router";
// import pages
import { Login } from "./Pages/Login";
import { Floor1 } from "./Pages/Floor1";
import { Floor2 } from "./Pages/Floor2";
import { Floor3 } from "./Pages/Floor3";
import { Floor4 } from "./Pages/Floor4";
import { Floor5 } from "./Pages/Floor5";
import { Floor6 } from "./Pages/Floor6";
import { Register } from "./Pages/Register";
import { Dashboard } from "./Pages/Dashboard";
import { Maintenance } from "./Pages/Maintenance";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/floor1" component={Floor1} />
        <Route exact path="/floor2" component={Floor2} />
        <Route exact path="/floor3" component={Floor3} />
        <Route exact path="/floor4" component={Floor4} />
        <Route exact path="/floor5" component={Floor5} />
        <Route exact path="/floor6" component={Floor6} />
        <Route exact path="/maintenance" component={Maintenance} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};
