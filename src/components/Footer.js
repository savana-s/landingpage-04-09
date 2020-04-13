import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="column">
            <h4 class="lead">Tips on being an IAM Monitor</h4>
            <h4>How to be an IAM User</h4>
          </div>
          <div className="column">
            <h1>USEIAM</h1>
            <p> &copy; 2020 All rights reserved</p>
            <p>Terms and Conditions | Privacy Policy</p>
          </div>
        </div>
      </footer>
    );
  }
}
