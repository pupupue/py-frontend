import React from "react";
import { Route, Switch } from "react-router";
// import pages
import { Login } from "./Pages/Login";
import { Floor } from "./Pages/Floor";
import { Register } from "./Pages/Register";
import { Dashboard } from "./Pages/Dashboard";
import { Maintenance } from "./Pages/Maintenance";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/floor/:id" component={Floor} />
        <Route exact path="/maintenance" component={Maintenance} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};
