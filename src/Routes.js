import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = ({ routes = {} }) => {
  return (
    <Switch>
      {Object.entries(routes).map(([routeName, props]) => {
        if (routeName === "LOGIN") return null;
        return <Route key={routeName} {...props} />;
      })}
    </Switch>
  );
};

export default Routes;
