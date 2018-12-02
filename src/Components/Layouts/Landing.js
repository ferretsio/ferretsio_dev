import React from "react";
import classes from "../../../static/css/Landing.css";
import Aux from "../../Hoc/Aux";
import { Link as ScrollLink, Element } from "react-scroll";
import { Icon, Grid, Image, Segment } from "semantic-ui-react";
import Portal from "./Portal";

export default props => {
  return (
    <div className={classes.landing} id="landing">
      <Grid columns={3} verticalAlign="bottom" centered>
        <Grid.Row verticalAlign="top">
          <Grid.Column width={4} className={classes.empty} />
          <Grid.Column className={classes.heading} width={8}>
            <h1>ferrets.io</h1>
          </Grid.Column>
          <Grid.Column width={4} className={classes.empty} />
        </Grid.Row>
        <Portal />
      </Grid>
    </div>
  );
};
