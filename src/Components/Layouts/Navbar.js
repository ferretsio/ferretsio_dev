import React, {Component} from "react";
import {Menu} from "semantic-ui-react";
import classes from "../../../static/css/Navbar.css";
import {Link as ScrollLink} from "react-scroll";

export default class  extends Component {
  state = {
    activeItem: "home"
  };
  
  menuItems = [
    {
      itemName: "what",
      itemTag: "What"
    },
    {
      itemName: "why",
      itemTag: "Why"
    },
    {
      itemName: "when",
      itemTag: "When"
    },
    {
      itemName: "who",
      itemTag: "Who"
    }
  ];
  
  renderMenuItem = (itemName, itemTag, activeItem, index) => {
    return (
      <Menu.Item
        name={itemName}
        active={activeItem === itemName}
        key={index}
      >
        <ScrollLink
          to={itemName}
          spy={true}
          smooth={true}
          duration={700}
        >
          <b>{itemTag}</b>
        </ScrollLink>
      </Menu.Item>
    );
  };
  
  render() {
    const activeItem = "home";
    return (
      <div className={classes.navbar}>
        <Menu borderless fixed="top">
          {this.renderMenuItem("home", "ferrets.io", activeItem)}
          <Menu.Menu position="right">
            {this.menuItems.map((mItem, index) => this.renderMenuItem(mItem.itemName, mItem.itemTag, activeItem, index))}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

