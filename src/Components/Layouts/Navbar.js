import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import classes from "../../../static/css/main.css";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className={classes.navbar}>
        <Menu pointing secondary fixed="top" inverted>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <b>ferrets.io</b>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="what"
              active={activeItem === "what"}
              onClick={this.handleItemClick}
            >
              <b>What</b>
            </Menu.Item>
            <Menu.Item
              name="concept"
              active={activeItem === "concept"}
              onClick={this.handleItemClick}
            >
              <b>Concept</b>
            </Menu.Item>
            <Menu.Item
              name="why"
              active={activeItem === "why"}
              onClick={this.handleItemClick}
            >
              <b>Why</b>
            </Menu.Item>
            <Menu.Item
              name="When"
              active={activeItem === "When"}
              onClick={this.handleItemClick}
            >
              <b>When</b>
            </Menu.Item>
            <Menu.Item
              name="technology"
              active={activeItem === "technology"}
              onClick={this.handleItemClick}
            >
              <b>Technology</b>
            </Menu.Item>
            <Menu.Item
              name="Who"
              active={activeItem === "Who"}
              onClick={this.handleItemClick}
            >
              <b>Who</b>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
