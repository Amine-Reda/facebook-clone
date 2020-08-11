import React, { useState, useEffect } from "react";

import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import Navbar from "./components/Reusable/Navbar";

import "materialize-css/dist/css/materialize.min.css";
import { firebaseApp } from "./firebase";

function App() {
  const [stage, setStage] = useState("");
  const [signUpSignIn, setSignUpSignIn] = useState("SI");

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
        setStage("LoggedIn");
        setSignUpSignIn("SI");
      } else {
        console.log("non user signIn");
        setStage("NotloggedIn");
      }
    });
  }, []);

  const changeState = value => {
    setSignUpSignIn(value);
  };

  return (
    <div className="App">
      <Navbar stage={stage} />
      {stage === "LoggedIn" && <Feed />}
      {stage === "NotloggedIn" && signUpSignIn === "SI" && (
        <SignIn changeState={changeState} />
      )}
      {stage === "NotloggedIn" && signUpSignIn === "SU" && (
        <SignUp changeState={changeState} />
      )}
    </div>
  );
}

export default App;
