import React from "react";
import CardContainer from "./CardContainer";
// Parent: BrowseContainer
// Child: CardContainer

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_ids: [],
      imgTitles: [],
      artist_title: [],
      curSel: "",
    };
  }
  // this updates the state
  sendArtIdToState = (imgIds, titles, artistsTitles) => {
    this.setState({
      image_ids: imgIds,
      imgTitles: titles,
      artist_title: artistsTitles,
    });
  };

  // this function calls the fetch when the drop down menu is changed
  // receives json data and maps over, passing each api link to fetch, and getting the image id in return
  getArtWorks = async (jsonData) => {
    // when the query returns the results, map over json.data,
    const arrOfArtWorks = jsonData.map(async (art) => {
      const response = await fetch(art.api_link);
      const data = await response.json();
      // return data.data.image_id;
      return data.data;
    });

    // takes  array of promises waits for them to be fulfilled, then gives array of ids
    const arrOfArt = await Promise.all(arrOfArtWorks);

    // loop over array of artwork extract image_id and put into an array
    const arrOfImgIds = arrOfArt.map((artWorks) => artWorks.image_id);
    // array of titles, grabs art titles from the json data
    const arrOfArtTitles = jsonData.map((art) => art.title);
    // loop over array of artwork extract artist_title and put into an array
    const arrOfArtists = arrOfArt.map((artWorks) => artWorks.artist_title);

    // calling of function and passing in imgid, titles, and artists
    this.sendArtIdToState(arrOfImgIds, arrOfArtTitles, arrOfArtists);

    return arrOfArtWorks;
  };
  // uses the fetch call with the chosen category
  queryFetch(type) {
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${type}`)
      .then((res) => res.json())
      .then((json) => this.getArtWorks(json.data));
  }

  // invoked when a the drop down is changed, sets state and initiates fetch
  onChangeCategory = (e) => {
    this.setState({
      curSel: e.target.value,
    });
    this.queryFetch(e.target.value);
  };

  render() {
    return (
      <>
        <select
          onChange={(e) => this.onChangeCategory(e)}
          name="art-choice"
          id="1"
        >
          <option value="none"> </option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="nature">Nature</option>
          <option value="art">Art</option>
        </select>
        <header className="App-header">
          {/* //pass state to cardcontainer with props */}
          <CardContainer
            image_ids={this.state.image_ids}
            imgTitles={this.state.imgTitles}
            artists={this.state.artist_title}
          />
        </header>
      </>
    );
  }
}

export default Filter;
