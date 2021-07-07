import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <>
        <h1>
          <Badge variant="light">Welcome to my Project!</Badge>
        </h1>
        <br />
        <div className="d-flex justify-content-center">
          <Card style={{ maxWidth: "400px" }}>
            The Art Institute of Chicago's API provides JSON-formatted data as a
            REST-style service that allows developers to explore and integrate
            the museum’s public data into their projects. I am a fan of art, but
            not yet a collector. I decided to use this API to power my project.
            This API is the same tool that powers their website, their mobile
            app, and many other technologies in the museum.
            <br />
            <br />
            <p>Please feel free to sign in and view the GuestBook</p>
            <p>You can also browse the virtual art gallery by category</p>
          </Card>
        </div>
      </>
    );
  }
}

export default Home;
