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
            <div class="column">
              <button class="applink">
                <span role="img">🍏</span>App Store
              </button>
            </div>
            <div class="column">
              <button class="applink">
                <span role="img">📐</span>Google Play
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
