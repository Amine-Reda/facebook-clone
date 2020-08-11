import React from "react";
import { Navbar, Icon, NavItem, Container } from "react-materialize";
import { firebaseApp } from "../../firebase";
import F from "../../assets/facebook-image.png";

export default props => {
  return (
    <div style={{ background: "royalblue" }}>
      <Container>
        <Navbar
          alignLinks="right"
          brand={
            <a
              className="brand-logo"
              href="www.google.com"
              style={{ paddingTop: 8 }}
            >
              <img
                src={F}
                alt="Logo"
                height="70px"
                style={{ paddingBottom: 10 }}
              />
            </a>
          }
          id="mobile-nav"
          className="custom-navbar"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavItem
            href="components.html"
            onClick={event => {
              event.preventDefault();
              firebaseApp.auth().signOut();
            }}
          >
            {props.stage}
          </NavItem>
        </Navbar>
      </Container>
    </div>
  );
};
