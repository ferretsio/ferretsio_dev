import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import classes from "../../../static/css/Footer.css";
import { Link as ScrollLink } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <Menu borderless attached="bottom">
          <Menu.Item name="home">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={700}
              id="sclink"
            >
              <b>
                <Icon name="copyright outline" />
                ferrets.io, 2018
              </b>
            </ScrollLink>
          </Menu.Item>
          <Menu.Item name="home">Built by: Pranav Kanade</Menu.Item>
          <Menu.Menu position="right" className={classes.apps}>
            <Menu.Item>
              <a href="https://ferrestio.slack.com/messages">
                <Icon name="slack" size="huge" color="green" />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://github.com/ferretsio">
                <Icon name="github" size="huge" color="black" />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://github.com/ferretsio">
                <Icon name="twitter" size="huge" color="blue" />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://github.com/ferretsio">
                <Icon name="facebook" size="huge" />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://github.com/ferretsio">
                <Icon name="instagram" size="huge" color="red" />
              </a>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
