import React, { Component } from "react";
export default class About2 extends Component {
  render() {
    return (
      <section id="about2">
        <div className="columns contact-details">
          <h2 style={{ fontSize: "1.2em" }}>Welcome to USEIAM</h2>
          <p style={{ fontSize: "0.8em" }}>
            USEIAM allows me to use my smart phone to guide me every day. It's
            like having a shadow in my phone.
          </p>
          <div class="row">
            <div class="column">
              <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" />
            </div>
            <div class="column">
              <img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" />{" "}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
