import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "page1" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          name="page1"
          active={activeItem === "page1"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="page2"
          active={activeItem === "page2"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="page3"
          active={activeItem === "page3"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
