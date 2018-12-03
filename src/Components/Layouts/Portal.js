import React, { Component } from "react";
import {
  Grid,
  Header,
  Segment,
  Transition,
  Button,
  Icon
} from "semantic-ui-react";
import classes from "../../../static/css/Portal.css";
export default class TransitionablePortalExampleTransition extends Component {
  state = { open: false, qId: 0 };
  componentDidMount() {
    this.setState({ open: true });
    setInterval(this.handleClickRight, 5500);
  }

  Quotes = [
    {
      header: "Thomas Hauser",
      quote:
        "Not voting, is disrespecting the 'best' of what our nation stands for."
    },
    {
      header: "Unknown",
      quote: "The right of election is the very essence of the constitution."
    },
    {
      header: "Patty Berg",
      quote: "People are what any election is all about."
    }
  ];

  handleClickLeft = () => {
    this.setState({ open: false });
    setTimeout(() => {
      let id = this.state.qId - 1;
      id = id % 3;
      this.setState({ qId: Math.abs(id) });
      this.setState({ open: true });
    }, 500);
  };

  handleClickRight = () => {
    this.setState({ open: false });
    setTimeout(() => {
      let id = this.state.qId + 1;
      id = id % 3;
      this.setState({ qId: id });
      this.setState({ open: true });
    }, 500);
  };

  renderPortalContent = () => {
    const open = this.state.open;
    return (
      <Transition visible={open} animation="scale" duration={500}>
        <div>
          <h2>"{this.Quotes[this.state.qId].quote}"</h2>
          <h3>{this.Quotes[this.state.qId].header}</h3>
        </div>
      </Transition>
    );
  };

  render() {
    return (
      <Grid.Row verticalAlign="bottom" className={classes.portal}>
        <Grid.Column width={4} textAlign="center">
          <Icon name="caret left" onClick={this.handleClickLeft} size="huge" />
        </Grid.Column>
        <Grid.Column width={8} verticalAlign="middle">
          {this.renderPortalContent()}
        </Grid.Column>
        <Grid.Column width={4} textAlign="center">
          <Icon
            name="caret right"
            onClick={this.handleClickRight}
            size="huge"
          />
        </Grid.Column>
      </Grid.Row>
    );
  }
}
