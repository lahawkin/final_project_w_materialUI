import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./comp/sign-upMatUI.js";
import NewPost from "./comp/newpost.js";
import Dashboard from "./comp/Dashboard.js";
import MenuAppBar from "./comp/navbar.js";
export function routes() {
  return <Router>
    <div>
      <MenuAppBar />
      <Switch>

        <Route exact path={["/"]}>
          <Dashboard />
        </Route>


        <Route exact path={["/signup"]}>
          <SignUp />
        </Route>


        <Route exact path={["/newpost"]}>
          <NewPost />
        </Route>
        <Route exact path={["/Dashboard"]}>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>;
}
