import React, { Component } from "react";
export default class About3 extends Component {
  render() {
    return (
      <section id="about3">
        {" "}
        <div className="columns contact-details">
          <h2>Here is how you use IAM</h2>
          <p>
            MAKE A COMMITMENT TO USE THE USEIAM APP EVERY DAY FOR THREE MONTHS.
          </p>
          <div class="row">
            <div class="column02">
              <img
                className="img1"
                src="images/diamond.png"
                alt="diamond-icon"
              />
              <img
                className="img2"
                src="images/diamond.png"
                alt="diamond-icon"
              />
            </div>
            <div class="column01">
              <p>
                Every day take a selfie video of what is on your mind, how you
                fee (physically, mentally, spiritually), what you have planned
                for the day, any thing else you want to remind your self of.
                Talk about your previous day, the people you met, etc. and then
                send to your secure email.
              </p>
              <p className="last">
                When you go to a place other than your residence, hit the
                location button on the useiam app and a gps locator map is sent
                to the same secure email address along with your typed purpose
                for being at that location.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
