import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import classes from "../../../static/css/Navbar.css";
import { Link as ScrollLink } from "react-scroll";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className={classes.navbar}>
        <Menu borderless fixed="top">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={700}
              id="sclink"
            >
              <b>ferrets.io</b>
            </ScrollLink>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="what"
              active={activeItem === "what"}
              onClick={this.handleItemClick}
            >
              <ScrollLink
                to="what"
                spy={true}
                smooth={true}
                duration={700}
                id="sclink"
              >
                <b>What</b>
              </ScrollLink>
            </Menu.Item>
            <Menu.Item
              name="why"
              active={activeItem === "why"}
              onClick={this.handleItemClick}
            >
              <ScrollLink
                to="why"
                spy={true}
                smooth={true}
                duration={700}
                id="sclink"
              >
                <b>Why</b>
              </ScrollLink>
            </Menu.Item>
            <Menu.Item
              name="When"
              active={activeItem === "When"}
              onClick={this.handleItemClick}
            >
              <ScrollLink
                to="when"
                spy={true}
                smooth={true}
                duration={700}
                id="sclink"
              >
                <b>When</b>
              </ScrollLink>
            </Menu.Item>
            <Menu.Item
              name="Who"
              active={activeItem === "Who"}
              onClick={this.handleItemClick}
            >
              <ScrollLink
                to="who"
                spy={true}
                smooth={true}
                duration={700}
                id="sclink"
              >
                <b>Who</b>
              </ScrollLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
