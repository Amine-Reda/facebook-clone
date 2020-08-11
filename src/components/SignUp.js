import React, { useState } from "react";
import { TextInput, Icon } from "react-materialize";
import signUp from "../api/signUp";
import { Button } from "react-materialize";

export default props => {
  const [data, setData] = useState({
    firtsName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const onSubmit = async () => {
    const result = signUp(data);
    if (result === true) {
      console.log("Sign Up SUCCESSFUL");
    } else if (result === false) {
      console.log("Sign Up FAILE");
    }
  };

  const onChangeText = (key, value) => {
    const newData = { ...data };
    newData[key] = value;
    setData(newData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div className="outerBox">
        <h4>Sign Up</h4>
        <TextInput
          id="input1"
          label="First Name"
          onChange={e => {
            onChangeText("firstName", e.target.value);
          }}
        />
        <TextInput
          id="input2"
          label="Last Name"
          onChange={e => {
            onChangeText("lastName", e.target.value);
          }}
        />
        <TextInput
          id="input3"
          label="Email"
          onChange={e => {
            onChangeText("email", e.target.value);
          }}
        />
        <TextInput
          id="input4"
          label="Password"
          onChange={e => {
            onChangeText("password", e.target.value);
          }}
        />
        <Button node="button" type="submit" waves="light" onClick={onSubmit}>
          Submit
          <Icon right>send</Icon>
        </Button>
        <p>
          Already have an account?
          <span
            onClick={() => {
              props.changeState("SI");
            }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};
