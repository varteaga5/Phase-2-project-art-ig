import React, { Component } from "react";
// imports all from react bootstrap
import * as ReactBootStrap from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      // main element that is returned
      <ReactBootStrap.Navbar bg="light" expand="md">
        {/* houses the image and links it the site */}
        <ReactBootStrap.Navbar.Brand link="/">
          <a href="https://www.artic.edu/" target="_blank" rel="noreferrer">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQH_O0IttUyiXA/company-logo_200_200/0/1519856335355?e=2159024400&v=beta&t=JlOraGURGYqTw9dHHdiaT2_Pjbm04J2odDDRgaNMy0I"
              alt=""
            />
          </a>
        </ReactBootStrap.Navbar.Brand>
        {/* navbar will expand and collapse based on the size of the browser */}
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/GuestBook">
              Sign the GuestBook
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/BrowseContainer">
              Browse Art
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}

export default NavBar;
