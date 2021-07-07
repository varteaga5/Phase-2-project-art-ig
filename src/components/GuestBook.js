import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class GuestBook extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [], message: "" };
  }
  // when the page loads this will populate the ppl that have already signed the guestbook
  componentDidMount() {
    fetch("http://localhost:8000/guests")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          value: data,
        })
      );
  }
  formSub = (e) => {
    e.preventDefault();
    const { value } = this.state;
    // creating new guest variable that uses ref in input, use .trim to make sure a empty space is not entered and signed in.
    const newGuest = this.newGuest.value.trim();
    // use join here so that 'includes' will search over nested arr in state
    const isOnList = value.join().includes(newGuest);

    // validates that no empty name is submitted to
    if (newGuest.length > 0) {
      // checks if item has already been added
      if (isOnList) {
        this.setState({ message: "you already signed in" });
      } else {
        // updating state, uses spread operator to preserve old items, then add new item
        // validates that no empty name is submitted
        newGuest !== "" &&
          this.setState({
            value: [...this.state.value, newGuest],
            message: "",
          });
        // fetch POST Request to send to db.json
        fetch("http://localhost:8000/guests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // have to put newGuest inside square brackets because the json server is expecting an array
          body: JSON.stringify([...[], newGuest]),
        });
      }
    }
    e.target.reset();
  };

  render() {
    // destructures value variable
    const { value, message } = this.state;
    return (
      <>
        <h2>Please sign our guest book.</h2>
        <br />
        <form onSubmit={(e) => this.formSub(e)} id="guestForm" className="">
          <label htmlFor="Name"></label>
          <input
            //   this is the ref that grabs value and adds to list
            ref={(input) => (this.newGuest = input)}
            type="name"
            id="Name"
            placeholder="Name"
          />
          <Button type="submit" className={"btn-danger"}>
            Sign the Guestbook
          </Button>
        </form>
        {message !== "" && <p className="message text-danger">{message}</p>}
        <br />
        <h2 className="title">GuestBook</h2>
        <Card>
          <Card.Text>
            <ol id="items" className="list-group">
              {value.map((name) => (
                <li className="mb-3" key={name}>
                  {name}
                </li>
              ))}
            </ol>
          </Card.Text>
        </Card>
      </>
    );
  }
}

export default GuestBook;
