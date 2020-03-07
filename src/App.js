import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./comp/sign-upMatUI.js";
import NavBar from "./comp/navbar.js";
import NewPost from "./comp/newpost.js";
import Dashboard from "./comp/Dashboard.js"; 

function App() {
  return (
    navigation()
  );
}

export default App;
function navigation() {
  return <Router>
    <div>
      <NavBar />
      <Switch>

        <Route exact path={["/"]}>
        </Route>


        <Route exact path={["/signup"]}>
          <SignUp />
        </Route>


        <Route exact path={["/newpost"]}>
          <NewPost />
        </Route>
        <Route exact path = {["/Dashboard"]}>
          <Dashboard /> 
        </Route>
      </Switch>
    </div>
  </Router>;
}

