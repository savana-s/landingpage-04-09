import React, { Component } from "react";
export default class About2 extends Component {
  render() {
    return (
      <section id="about2">
        <div className="columns contact-details">
          <h2>Welcome to USEIAM</h2>
          <p>
            USEIAM allows me to use my smart phone to guide me every day. It's
            like having a shadow in my phone.
          </p>
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
