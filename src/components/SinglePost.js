import React, { useEffect, useState } from "react";
import { Dropdown, Icon, Button } from "react-materialize";
import { userRef } from "../firebase";

export default ({ details }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const getName = () => {
      userRef.child(details.createdBy).once("value", snap => {
        setFirstName(snap.val()["firstName"]);
        setLastName(snap.val()["lastName"]);
      });
    };
    if (details && details.createdBy) {
      getName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="outerBox m10">
        <div>
          <div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    overflow: "hidden"
                  }}
                >
                  <img
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt="profile photi"
                    height="100%"
                  />
                </div>
              </div>
              <div style={{ marginLeft: 10, flex: 1 }}>
                <div style={{ color: "#385898", fontWeight: 600 }}>
                  {firstName} {lastName}
                </div>
                <div style={{ fontSize: 12, color: "gray" }}>
                  {details.createdAt}
                </div>
              </div>
              <div>
                <Dropdown
                  options={{
                    alignment: "left",
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                  }}
                  trigger={
                    <Button flat node="button">
                      <Icon>more_vert</Icon>
                    </Button>
                  }
                >
                  <a href="w" style={{ color: "black" }}>
                    Edit
                  </a>
                  <a href="w" style={{ color: "black" }}>
                    Delete
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
          <div>{details && details.content ? details.content : ""}</div>
        </div>
      </div>
    </div>
  );
};
