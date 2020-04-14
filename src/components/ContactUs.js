import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div class="row">
          <div class="column01">
            <p className="lead">USEIAM is so easy.</p>
            <p>The app only has two functions:</p>
            <h4> 1. A CAMERA TO RECORD MY PLANS AND FEELINGS</h4>
            <h4 className="end">
              2. A GPS LOCATOR TO REMIND ME OF WHERE I HAVE BEEN, WHEN I WAS
              THERE AND FOR WHAT PURPOSE.
            </h4>
          </div>
          <div class="column02">
            <img class="ios-pic" src="images/firstios.png" alt="" />
          </div>
        </div>
      </section>
    );
  }
}
