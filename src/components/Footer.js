import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <h1>USEIAM</h1>
            <p> &copy; 2020 All rights reserved</p>
            <p>Terms and Conditions | Privacy Policy</p>
          </div>
        </div>
      </footer>
    );
  }
}
