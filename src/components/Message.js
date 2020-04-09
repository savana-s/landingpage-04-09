import React, { Component } from "react";
export default class Message extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#eaebf5",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            paddingTop: "25px",
          }}
        >
          Contact Us About IAM
        </h2>
        <form name="messageus" method="POST">
          <p>
            <label>
              <input type="text" name="name" placeholder="Your Name" />
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="Your Email" />
            </label>
          </p>

          <p>
            <label>
              <input type="text" name="phone" placeholder="Your Phone Number" />
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" placeholder="Your Comment" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
