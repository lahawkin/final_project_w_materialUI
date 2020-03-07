import React from "react";
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
  );
}

export default App;
