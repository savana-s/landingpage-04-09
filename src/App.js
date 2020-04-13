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
import infoData from "./infoData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About2 />
        <ContactUs />
        <About3 />
        <About />
        <Video />
        <Seventh />
        <Testimonials infoData={infoData} />
        <Ninth />
        <Message />
        <Footer />
      </div>
    );
  }
}

export default App;
