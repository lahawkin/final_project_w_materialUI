import React from "react";
<<<<<<< HEAD
import MyNavBar from "./comp/navbar.js";
import Album from "./comp/Dashboard";
import SignIn from "./comp/sign-upMatUI";

function App() {
  return (
    <div>
      <MyNavBar />
      <SignIn />
      <Album />
    </div>
=======
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
>>>>>>> 6e41942e2f0baa1ec9ef1782ac672b5933f44f56
  );
}

export default App;
