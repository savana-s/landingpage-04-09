import React, { Component } from "react";

export default class Ninth extends Component {
  render() {
    return (
      <section id="ninth">
        <div className="columns contact-details">
          <h2>Try USEIAM Today</h2>
          <div class="row">
            <div class="column1">
              <a
                href="https://apps.apple.com/us/app/useiam/id1497407740"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/appstore.png" alt="appstore" />
              </a>
            </div>
            <div class="column2">
              <a
                href="https://play.google.com/store/apps/details?id=com.useiam.useiam2"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/googleplay.png" alt="googlestore" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
