import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Page1 from "./../Components/Pages/page1";
import Page2 from "./../Components/Pages/page2";
import Page3 from "./../Components/Pages/page3";
import Navbar from "./../Components/Layouts/Navbar";
import Landing from "./../Components/Layouts/Landing";
import { Element } from "react-scroll";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <Container>
          <p>THis is what we've become</p>
          <Element name="Content">
            <Page1 />
            <Page2 />
            <Page3 />
          </Element>
        </Container>
      </div>
    );
  }
}

export default Home;
