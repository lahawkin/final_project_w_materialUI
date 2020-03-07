import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./comp/sign-upMatUI.js";
import NavBar from "./comp/navbar.js";
import NewPost from "./comp/newpost.js";
import Dashboard from "./comp/Dashboard.js";
<<<<<<< HEAD
import Blog from "./comp/product-page.js";
import MainFeaturedPost from "./comp/main-feature-post.js";
import FeaturedPost from "./comp/featured-post";
import Main from "./comp/main.js";
import Markdown from "./comp/markdown";
import Sidebar from "./comp/sidebar";
import Header from "./comp/header";
=======
>>>>>>> 55989539c1b707af37e52088da2524245f04aae3

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

<<<<<<< HEAD
          <Route exact path={["/signup"]}>
            <SignUp />
          </Route>
=======
        <Route exact path={["/"]}>
          <Dashboard />
        </Route>
>>>>>>> 55989539c1b707af37e52088da2524245f04aae3

          <Route exact path={["/newpost"]}>
            <NewPost />
          </Route>

          <Route exact path={["/Dashboard"]}>
            <Dashboard />
          </Route>

          <Route exact path={["/product-page"]}>
            <Blog />
          </Route>

<<<<<<< HEAD
          <Route exact path={["/main-feature-post"]}>
            <MainFeaturedPost />
          </Route>

          <Route exact path={["/featured-post"]}>
            <FeaturedPost />
          </Route>
=======
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
>>>>>>> 55989539c1b707af37e52088da2524245f04aae3

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
