import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./comp/sign-upMatUI.js";
import NavBar from "./comp/navbar.js";
import NewPost from "./comp/newpost.js";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/* Dashboard */}
          <Route exact path={["/"]}>
          </Route>

          {/* Sign up */}
          <Route exact path={["/signup"]}>
            <SignUp />
          </Route>

          {/* New Post */}
          <Route exact path={["/newpost"]}>
            <NewPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
