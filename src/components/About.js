import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div class="row">
          <div class="column">
            <img class="ios-pic" src="images/firstios.png" alt="" />
          </div>
          <div class="column">
            <p className="lead">How does USEIAM help me?</p>

            <h4 className="end">
              Throughout history people have use personal diaries to record
              memories of observations and occurrences. USEIAM is a modern day
              personal diary and much more secure than writing in books. Instead
              of writing in a diary you video a selfie to your secure email
              adress. USEIAM allows you to be accountable to yourself and have
              personal records. should they be needed.
            </h4>
          </div>
        </div>
      </section>
    );
  }
}
