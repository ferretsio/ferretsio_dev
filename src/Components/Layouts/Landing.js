import React from "react";
import classes from "../../../static/css/Landing.css";
import Aux from "../../Hoc/Aux";
import { Link as ScrollLink, Element } from "react-scroll";
import { Icon } from "semantic-ui-react";

export default props => {
  return (
    <div className={classes.landing} id="landing">
      <div className={classes.heading}>
        <h1>Ferrets IO</h1>
      </div>
      <ScrollLink
        to="Content"
        spy={true}
        smooth={true}
        duration={700}
        id="sclink"
      >
        <Icon name="chevron down" size="big" id="scrolldown" />
      </ScrollLink>
    </div>
  );
};
