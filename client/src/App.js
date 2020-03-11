import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./comp/sign-upMatUI.js";
import NavBar from "./comp/navbar.js";
import NewPost from "./comp/newpost.js";
import Dashboard from "./comp/Dashboard.js";
import Blog from "./comp/product-page.js";
import MainFeaturedPost from "./comp/main-feature-post.js";
import FeaturedPost from "./comp/featured-post";
import Main from "./comp/main.js";
import Markdown from "./comp/markdown";
import Sidebar from "./comp/sidebar";
//import Header from "./comp/header";

function App() {
  return navigation();
}

export default App;
function navigation() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/"]}></Route>

          <Route exact path={["/signup"]}>
            <SignUp />
          </Route>

          <Route exact path={["/newpost"]}>
            <NewPost />
          </Route>

          <Route exact path={["/Dashboard"]}>
            <Dashboard />
          </Route>

          <Route exact path={["/product-page"]}>
            <Blog />
          </Route>

          <Route exact path={["/main-feature-post"]}>
            <MainFeaturedPost />
          </Route>

          <Route exact path={["/featured-post"]}>
            <FeaturedPost />
          </Route>

          <Route exact path={["/main"]}>
            <Main />
          </Route>

          <Route exact path={["/markdown"]}>
            <Markdown />
          </Route>

          <Route exact path={["/sidebar"]}>
            <Sidebar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
