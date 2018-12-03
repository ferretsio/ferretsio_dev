import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Navbar from "./../Components/Layouts/Navbar";
import Landing from "./../Components/Layouts/Landing";
import Main from "./../Components/Layouts/Main";
import Footer from "./../Components/Layouts/Footer";
import { Element } from "react-scroll";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Element name="home" />
        <Landing />
        <Element name="main">
          <Main />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default Home;
