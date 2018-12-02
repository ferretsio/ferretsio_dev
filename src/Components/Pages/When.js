import React, { Component } from "react";
import classes from "../../../static/css/When.css";
import { Transition, Segment, Grid, Header } from "semantic-ui-react";

export default class When extends Component {
  state = {
    endDate: new Date("4/01/2019"),
    days: 0,
    daysShuffle: true,
    hours: 0,
    hoursShuffle: true,
    minutes: 0,
    minutesShuffle: true,
    seconds: 0,
    secondsShuffle: true
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime = () => {
    // get new date
    const time = new Date();
    // set time units
    const hours = Math.abs(24 - time.getHours() - 1);
    const minutes = Math.abs(60 - time.getMinutes());
    const seconds = Math.abs(60 - time.getSeconds());

    const timeDiff = Math.abs(this.state.endDate.getTime() - time.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const days = diffDays;
    // on hour chanage, update hours and shuffle state

    if (days !== this.state.days) {
      let daysShuffle = !this.state.daysShuffle;
      this.setState({
        daysShuffle
      });
      daysShuffle = !this.state.daysShuffle;
      this.setState({
        days,
        daysShuffle
      });
    }
    if (hours !== this.state.hours) {
      let hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hoursShuffle
      });
      hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      let minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutesShuffle
      });
      minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      let secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        secondsShuffle
      });
      secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle
      });
    }
  };

  renderDigit = (digit, visible) => {
    return (
      <Transition visible={visible} animation="slide up" duration={800}>
        <h1>{digit}</h1>
      </Transition>
    );
  };

  render() {
    return (
      <div>
        <Grid className={classes.when}>
          <Grid.Column width={3} className={classes.empty} />
          <Grid.Column width={10} verticalAlign="middle">
            <h1>Getting ready to launch in ...</h1>
            <Grid>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <h2>Days</h2>
                  <Segment className={classes.card}>
                    {this.renderDigit(this.state.days, this.state.daysShuffle)}
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <h2>Hours</h2>
                  <Segment className={classes.card}>
                    {this.renderDigit(
                      this.state.hours,
                      this.state.hoursShuffle
                    )}
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <h2>Minutes</h2>
                  <Segment className={classes.card}>
                    {this.renderDigit(
                      this.state.minutes,
                      this.state.minutesShuffle
                    )}
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <h2>Seconds</h2>
                  <Segment className={classes.card}>
                    {this.renderDigit(
                      this.state.seconds,
                      this.state.secondsShuffle
                    )}
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={3} className={classes.empty} />
        </Grid>
      </div>
    );
  }
}
