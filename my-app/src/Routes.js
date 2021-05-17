import React from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./components/Routing/PrivateRoute";
// import pages
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Floor1 } from "./Pages/Floor1";
import { Floor2 } from "./Pages/Floor2";
import { Floor3 } from "./Pages/Floor3";
import { Floor4 } from "./Pages/Floor4";
import { Floor5 } from "./Pages/Floor5";
import { Floor6 } from "./Pages/Floor6";
import { Notes } from "./Pages/Notes";
import { Dashboard } from "./Pages/Dashboard";
import { Maintenance } from "./Pages/Maintenance";

export const Routes = ({ auth }) => {
  return (
    <Switch>
      <Route exact path="/App/login" component={Login} />
      <Route exact path="/App/register" component={Register} />
      <PrivateRoute
        exact
        path={["/", "/App"]}
        component={Dashboard}
        auth={auth}
      />
      <PrivateRoute exact path="/App/floor1" component={Floor1} auth={auth} />
      <PrivateRoute exact path="/App/floor2" component={Floor2} auth={auth} />
      <PrivateRoute exact path="/App/floor3" component={Floor3} auth={auth} />
      <PrivateRoute exact path="/App/floor4" component={Floor4} auth={auth} />
      <PrivateRoute exact path="/App/floor5" component={Floor5} auth={auth} />
      <PrivateRoute exact path="/App/floor6" component={Floor6} auth={auth} />
      <PrivateRoute exact path="/App/notes" component={Notes} auth={auth} />
      <PrivateRoute
        exact
        path="/App/Maintenance"
        component={Maintenance}
        auth={auth}
      />
      <PrivateRoute path="*" component={Dashboard} auth={auth} />
    </Switch>
  );
};
