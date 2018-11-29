import React from "react";
import classes from "../../../static/css/main.css";
import Aux from "../../Hoc/Aux";
import { Link as ScrollLink } from "react-scroll";
import { Icon } from "semantic-ui-react";

export default props => {
  return (
    <div className={classes.landing} id="landing">
      <h1>Ferrets IO</h1>
      <ScrollLink
        to="Content"
        spy={true}
        smooth={true}
        duration={2000}
        id="sclink"
      >
        <Icon name="chevron down" size="big" />
      </ScrollLink>
    </div>
  );
};
