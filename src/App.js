import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuestBook from "./components/GuestBook";
import BrowseContainer from "./components/BrowseContainer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      // nestles all components in Route
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            {/* route that goes home */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* route that goes to GuestBook */}
            <Route path="/GuestBook">
              <GuestBook />
            </Route>
            {/* route that goes to BrowseContainer */}
            <Route path="/BrowseContainer">
              <BrowseContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
