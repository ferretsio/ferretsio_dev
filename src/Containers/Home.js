import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Navbar from "./../Components/Layouts/Navbar";
import Landing from "./../Components/Layouts/Landing";
import Main from "./../Components/Layouts/Main";
import { Element } from "react-scroll";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Element name="home" />
        <Landing />
        <Container>
          <Element name="Content">
            <Main />
          </Element>
        </Container>
      </div>
    );
  }
}

export default Home;
