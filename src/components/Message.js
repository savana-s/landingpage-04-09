import React, { Component } from "react";
export default class Message extends Component {
  render() {
    return (
      <section id="message">
        <p className="lead">Contact Us About IAM</p>
        <form class="form-style-9">
          <ul>
            <li>
              <input
                type="text"
                name="field1"
                class="field-style field-split align-left"
                placeholder="Name"
              />
              <input
                type="email"
                name="field2"
                class="field-style field-split align-right"
                placeholder="Email"
              />
            </li>
            <li>
              <input
                type="text"
                name="field3"
                class="field-style field-full align-none"
                placeholder="Phone"
              />
            </li>

            <li>
              <textarea
                name="field5"
                class="field-style"
                placeholder="Message"
              ></textarea>
            </li>
            <li>
              <input type="submit" class="submitbtn" value="Send Message" />
            </li>
          </ul>
        </form>
      </section>
    );
  }
}
