import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Page1 from "./../Components/Pages/page1";
import Page2 from "./../Components/Pages/page2";
import Page3 from "./../Components/Pages/page3";
import Navbar from "./../Components/Layouts/Navbar";

class Home extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Navbar />
          </Grid.Column>
          <Grid.Column width={10}>
            <Page1 />
            <Page2 />
            <Page3 />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Home;
