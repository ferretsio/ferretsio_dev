import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Navbar from "./../Components/Layouts/Navbar";
import Landing from "./../Components/Layouts/Landing";
import Portal from "./../Components/Layouts/Portal";
import { Element } from "react-scroll";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Element name="home" />
        <Landing />
      </div>
    );
  }
}

export default Home;
