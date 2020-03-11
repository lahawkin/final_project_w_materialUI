import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./sign-upMatUI.js";
import NavBar from "./navbar.js";
import NewPost from "./newpost.js";
import Dashboard from "./Dashboard.js";
import Blog from "./product-page.js";
import MainFeaturedPost from "./main-feature-post.js";
import FeaturedPost from "./featured-post";


export function navigation(props) {
  console.log("in navigation")
    console.log(props); 
  return (<Router>
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
      </Switch>
    </div>
  </Router>);
}

export default navigation; 
