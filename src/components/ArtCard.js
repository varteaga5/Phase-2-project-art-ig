import React, { Component } from "react";
import "/Users/VCNTX/Development/Projects/art-ig/src/App.css";
// Parent: CardContainer
class ArtCard extends Component {
  render() {
    return (
      <div className="App">
        <img
          style={{ width: "100%", maxWidth: "750px", height: "auto" }}
          src={this.props.src}
          alt=""
        />
        <p style={{ fontSize: "16px" }}>{this.props.title}</p>
        <p style={{ fontSize: "16px" }}>{this.props.artist}</p>
      </div>
    );
  }
}

export default ArtCard;
