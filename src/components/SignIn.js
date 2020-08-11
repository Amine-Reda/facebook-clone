import React, { useState } from "react";
import { TextInput, Button, Icon } from "react-materialize";
import signIn from "../api/signIn";

export default props => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const onChangeText = (key, value) => {
    const newData = { ...data };
    newData[key] = value;
    setData(newData);
  };
  const onSubmit = async () => {
    const result = signIn(data);
    if (result === true) {
      console.log("sign In SUCCESSFUL");
    } else if (result === false) {
      console.log("sign In FAILE");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div className="outerBox">
        <h4>Sign In</h4>

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
          You dont have account?
          <span
            onClick={() => {
              props.changeState("SU");
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};
