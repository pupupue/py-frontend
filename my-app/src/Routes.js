import React from "react";
import { Route, Switch } from "react-router";
// import pages
import { Floor1 } from "./Pages/Floor1";
import { Floor2 } from "./Pages/Floor2";
import { Floor3 } from "./Pages/Floor3";
import { Floor4 } from "./Pages/Floor4";
import { Floor5 } from "./Pages/Floor5";
import { Floor6 } from "./Pages/Floor6";
import { Dashboard } from "./Pages/Dashboard";
import { Maintenance } from "./Pages/Maintenance";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/App" component={Dashboard} />
        <Route exact path="/App/floor1" component={Floor1} />
        <Route exact path="/App/floor2" component={Floor2} />
        <Route exact path="/App/floor3" component={Floor3} />
        <Route exact path="/App/floor4" component={Floor4} />
        <Route exact path="/App/floor5" component={Floor5} />
        <Route exact path="/App/floor6" component={Floor6} />
        <Route exact path="/App/maintenance" component={Maintenance} />
      </Switch>
    </>
  );
};
