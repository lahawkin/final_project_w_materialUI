import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import "./App.css";
import NewPost from "./newpost.js";
import SignupForm from "./comp/sign-up.js"
// import SignInSide from "./oldPost";

function NewProduct() {
  return (
    <div>
      <NewPost />
      <SignupForm/>
    </div>
  );
}

export default NewProduct;
