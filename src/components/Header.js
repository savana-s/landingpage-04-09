import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline"></h1>
              <h1 className="responsive-headline">I AM</h1>
              <br />
              <h2>I KNOW WHO I AM</h2>
              <h2>I KNOW WHAT I AM DOING</h2> <h2>I KNOW HOW I AM FEELING</h2>{" "}
              <h2>I KNOW WHEN AND WHERE I AM</h2>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
