import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import AddGame from "./AddGame";
import AddPlayer from "./AddPlayer";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          id="navbar"
          fixed="top"
          variant="dark"
          expand="md"
          collapseOnSelect
        >
          <Navbar.Brand href="/">
            <div to="/" style={{ fontSize: 26 }}>
              SCI Foos<span style={{ color: "red" }}>360</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" style={{ textAlign: "center" }}>
              <LinkContainer to="/" exact>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/players">
                <Nav.Link>Players</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/teams">
                <Nav.Link>Teams</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/hall-of-fame">
                <Nav.Link>Hall of Fame</Nav.Link>
              </LinkContainer>
            </Nav>
            <div>
              <Form inline style={{ float: "left", display: "inline-block" }}>
                <AddPlayer />
              </Form>
              <div
                style={{ marginLeft: "20px", display: "inline-block" }}
              ></div>
              <Form inline style={{ float: "right", display: "inline-block" }}>
                <AddGame />
              </Form>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
