import React, { Component } from "react";
export default class Video extends Component {
  render() {
    return (
      <section id="video">
        {" "}
        <div className="columns contact-details">
          <h2>How it Works</h2>

          <div class="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_debXPUnJkQ?start=00"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </section>
    );
  }
}
