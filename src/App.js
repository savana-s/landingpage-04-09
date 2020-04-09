import React, { Component } from "react";
import Header from "./components/Header";
import About2 from "./components/About2";
import About3 from "./components/About3";
import About from "./components/About";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Seventh from "./components/Seventh";
import ContactUs from "./components/ContactUs";
import Ninth from "./components/Ninth";
import Message from "./components/Message";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About2 resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <About3 resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Video resumeData={resumeData} />
        <Seventh resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <Ninth resumeData={resumeData} />
        <Message resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
