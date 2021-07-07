import React, { Component } from "react";
import ArtCard from "./ArtCard";
// Parent: Filter
// Child: ArtCard

class CardContainer extends Component {
  render() {
    // map over the image ids arr, pass ids in to map as a img prop
    const artCardArr = this.props.image_ids.map((artImgId, i = 0) => (
      <ArtCard
        key={artImgId}
        src={`https://www.artic.edu/iiif/2/${artImgId}/full/843,/0/default.jpg`}
        title={this.props.imgTitles[i]}
        artist={this.props.artists[i]}
      />
    ));
    return <div className="App">{artCardArr}</div>;
  }
}

export default CardContainer;
