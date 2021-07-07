import React, { Component } from "react";
import Filter from "./Filter";
// Parent: App
// Child: Filter

class BrowseContainer extends Component {
  render() {
    return (
      <div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQH_O0IttUyiXA/company-logo_200_200/0/1519856335355?e=2159024400&v=beta&t=JlOraGURGYqTw9dHHdiaT2_Pjbm04J2odDDRgaNMy0I"
          alt=""
        />
        <br />
        <br />
        <h2>Please choose a category</h2>
        <br />
        <Filter />
      </div>
    );
  }
}

export default BrowseContainer;
