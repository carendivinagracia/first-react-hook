import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Hooks from "../Hooks";

const routes = [
  {
    key: "home",
    path: "/",
    component: Home
  },
  {
    key: "hooks",
    path: "/hooks",
    component: Hooks
  }
];

function Routes() {
  return routes.map(({ key, path, component }) => (
    <Route key={key} exact path={path} component={component} />
  ));
}

export default Routes;
