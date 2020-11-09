import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = ({ routes = {} }) => {
  return (
    <Switch>
      {Object.entries(routes).map(([routeName, props]) => {
        return <Route key={routeName} {...props} />;
      })}
    </Switch>
  );
};

export default Routes;
