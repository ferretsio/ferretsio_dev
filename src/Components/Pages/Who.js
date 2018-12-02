import React from "react";
import classes from "../../../static/css/Who.css";
import { Button, Card, Grid } from "semantic-ui-react";

export default () => {
  return (
    <div className={classes.who}>
      <h1>We are a group of programmers from Pune!</h1>
      <br />
      <Grid>
        <Grid.Row centered>
          <Grid.Column />
          <Grid.Column width={5}>
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Header>Join Us</Card.Header>
                <Card.Meta>Keep tab on our progress</Card.Meta>
                <Card.Description>
                  Join our hangout group to get the lates updates..
                </Card.Description>
              </Card.Content>
              <Card.Content extra textAlign="center">
                <a
                  href="https://hangouts.google.com/group/MlhfXi3u8Gz1HWCJ3"
                  target="_blank"
                >
                  <Button primary size="huge">
                    Join Now!
                  </Button>
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column />
          <Grid.Column width={5}>
            <Card fluid>
              <Card.Content textAlign="center">
                <Card.Header>Write to us</Card.Header>
                <Card.Meta>email</Card.Meta>
                <Card.Description>ferretsio.mail@gmail.com</Card.Description>
              </Card.Content>
              <Card.Content extra textAlign="center">
                <a href="mailto:ferretsio.mail@gmail.com">
                  <Button primary size="huge">
                    Reach out now
                  </Button>
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </div>
  );
};
