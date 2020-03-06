import React from "react";
import NewPost from "./comp/newpost.js/index.js";
import SignupForm from "./comp/sign-up.js"
import MyNavBar from "./comp/navbar.js"




function App() {
  return (
    <div>
      <MyNavBar />
      <NewPost />
      <SignupForm/>
    </div>
  );
}

export default NewProduct;
